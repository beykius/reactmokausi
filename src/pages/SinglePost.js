import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = ({ handleDelete, handleUpdate }) => {
    const { username, postId } = useParams();
    const [singlePost, setSinglePost] = useState(null); // Start with null to handle the loading state

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getsinglepost/${username}/${postId}`)
            .then(res => res.json())
            .then(data => {
                setSinglePost(data.data || {});
            });
    }, [username, postId]);

    const handleLocalDelete = () => {
        handleDelete(postId, () => setSinglePost(null));
    };

    const loggedInUsername = localStorage.getItem('username');

    if (singlePost === null) {
        return <p>Loading post...</p>;
    }

    if (!singlePost.title) {
        return <p>Post deleted or does not exist.</p>;
    }

    return (
        <div className="cartBox d-flex me-2">
            <img className='me-2' src={singlePost.image} alt={singlePost.title} />
            <div>
                <div className="title text-break">{singlePost.title}</div>
                <p className='text-break'>{singlePost.description}</p>
                {loggedInUsername === singlePost.username && (
                    <button onClick={handleLocalDelete}>Delete</button>
                )}
                {loggedInUsername === singlePost.username && (
                    <button onClick={handleUpdate}>Update Post</button>
                )}
            </div>
        </div>
    );
};

export default SinglePost;