import React from 'react';
import { withRouter } from 'next/router';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import AppLayout from '../components/AppLayout';
import Card from '../components/globals/Card';
import { GET_POST_QUERY } from '../Queries';


const Post = ({router: {query: {id}}}) => (
  <AppLayout>
    <Query query={GET_POST_QUERY} variables={{postId: id}}>
      {
        ({data, loading}) => {
          if (loading || data === undefined) {
            return <div>Loading...</div>
          }
          return <Card post={data.getPost} />;
        }
      }
    </Query>
  </AppLayout>
);

export default withRouter(Post);
