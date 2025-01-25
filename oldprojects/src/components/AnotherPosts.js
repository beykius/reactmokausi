import React from 'react';

const AnotherPosts = ({post, deletePost, movePost}) => {
    return (

            <div className="box">
                <div className="p-2 fs-3">{post.title}</div>
                <div className="p-2">{post.body}</div>
                <button onClick={movePost} className='me-1'>Move</button>
                <button onClick={deletePost}>Delete</button>
            </div>

    );
};

export default AnotherPosts;