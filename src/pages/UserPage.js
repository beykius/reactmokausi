import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostList from './PostList'; // Import PostList component

const UserPage = ({ handleDelete }) => {
    const { username } = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getUserPosts/${username}`)
            .then(res => res.json())
            .then(data => setUserPosts(data.data || []));
    }, [username]);

    const handleLocalDelete = (postId) => {
        setUserPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
        handleDelete(postId);
    };

    return (
        <div>
            <PostList posts={userPosts} handleDelete={handleLocalDelete} />
        </div>
    );
};

export default UserPage;