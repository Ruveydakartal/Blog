import React from 'react';

const BlogPage = ({blogData}) => {
    return (
        <div>
             <img src="" alt="" />
      <h1>{blogData.title}</h1>
      <p>{blogData.text}</p>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
        </div>
    );
};

export default BlogPage;