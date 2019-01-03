import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from 'next/router';

import AppLayout from "../components/AppLayout";
import { FEED_QUERY, POST_MUTATION } from '../Queries';
import Card from '../components/globals/Card';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChangleHandler = (e) => {
    const {name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmitHandler = (e, postMutation) => {
    e.preventDefault();
    postMutation().then((res) => {
      Router.push('/');
    }).catch((err)=> console.log({err}));
  } 

//   updateQueries = {(store, { data: { post } }) => {
//   const first = 10;
//   const skip = 0;
//   const orderBy = 'createdAt_ASC';
//   const dataQ = store.readQuery({
//     query: FEED_QUERY,
//     variables: { first, skip, orderBy }
//   });
//   console.log("SEE DATA", dataQ);
//   dataQ.feed.posts.unshift(post)
//   store.writeQuery({
//     query: FEED_QUERY,
//     data: dataQ,
//     variables: { first, skip, orderBy }
//   })
// }}

  updateCache = async (cache, { data: { post } }) => {
    try {
      const { feed: { posts }} = await cache.readQuery({ 
        query: FEED_QUERY,
        variables: { skip: 0, first: 10, orderBy: 'createdAt_DESC' }
      });
      
      await cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: [post, ...posts]
        },
        variables: { skip: 0, first: 10, orderBy: 'createdAt_DESC' }
      });
      
    }
    catch(err){
      console.log({err});
    }
  };


  render () {
    const {title, description} = this.state;
    return (
      <AppLayout>
        <div className="form-wrap">
          <h1 className="title text-center">Add Post</h1>
          <Mutation 
            mutation={POST_MUTATION} 
            variables={{ title, description }}
            update = {this.updateCache}
            >
            {(post, {loading}) => {
              return (
                <form onSubmit={(e) => this.handleSubmitHandler(e, post) }>
                  <div className="input-group">
                    <input 
                      type="text" 
                      name="title" 
                      className="input"
                      placeholder="Title" 
                      onChange={(e) => this.handleChangleHandler(e)}
                      required/>
                  </div>
                  <div className="input-group">
                    <textarea 
                      name="description" 
                      className="input"
                      placeholder="description" 
                      onChange={(e) => this.handleChangleHandler(e)}
                      required></textarea>
                  </div>
                  <div>
                    <button className="button button--primary" type="submit">{loading ? 'submitting...': 'Add Post' }</button>
                  </div>
                </form>
              )
            }}
          </Mutation>
          <style jsx>
          {
            `
            .form-wrap {
              background-color: white;
              padding: 30px;
              width: 100%;
              max-width: 400px;
              margin: 0 auto;
            }
            `
          }
          </style>
        </div>
      </AppLayout>
    );
  }

}

export default Add;