import React from 'react';

const Posts = ({post}) => {
    return (
        <div className='box'>
            <div className="title text-uppercase fw-bold">{post.title}</div>
            <div className="posts">{post.body}</div>
        </div>
    );
};

export default Posts;