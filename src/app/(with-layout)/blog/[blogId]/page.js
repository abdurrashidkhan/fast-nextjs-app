import React from 'react';

const SingleBlog = ({params}) => {
  const {blogId} = params;
  return (
    <div>
      <h1>Blog id : {blogId}</h1>
    </div>
  );
};

export default SingleBlog;