import React from 'react';
import Card from '../globals/Card';

const PostItem = ({post}) => (
  <div className="grid__column">
    <Card min post={post}/>
  </div>
);

export default PostItem;