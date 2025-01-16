import React from 'react';

const Comments = ({comment}) => {
    return (
        <div className='box'>
            <div className="title text-uppercase fw-bold">{comment.name}</div>
            <div className="posts fw-bold">{comment.email}</div>
            <div className="posts">{comment.body}</div>
        </div>

    );
};

export default Comments;