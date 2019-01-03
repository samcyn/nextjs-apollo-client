import React from 'react';
import PostItem from "./PostItem";
import { Query } from "react-apollo";
import { FEED_QUERY } from '../../Queries';

const _getLinksToRender = data => {
  const rankedPosts = data.feed.posts.slice();
  rankedPosts.sort((l1, l2) => new Date(l2.createdAt) - new Date(l1.createdAt));
  return rankedPosts;
}

const PostList = () => (
  <div className="post">
    <div className="post__headline">
      <h2 className="title">Recent Posts</h2>
    </div>
    <Query query={FEED_QUERY} variables={{ skip: 0, first: 10, orderBy: 'createdAt_DESC'}}>
      {
        ({data, loading, error, fetchMore}) => {

          if(loading) {
            return <div>Loading....</div>
          }
          if (error) {
            return <div>Error, can't load data</div>
          }
          return (
            <div className="post__list">
              <div className="grid__row">
                {
                  _getLinksToRender(data).map((post) => <PostItem key={post.id} post={post} />)
                }
              </div>
            </div>
          )
        }
      }
    </Query>
  </div>
);


export default PostList;