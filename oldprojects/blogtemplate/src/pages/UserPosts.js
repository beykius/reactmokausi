import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const UserPosts = () => {
    const { userId } = useParams();
    const [userPosts, setUsersPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => res.json())
            .then(data => setUsersPosts(data));
    }, [userId]);

    const navigateToPost = (postId) => {
        navigate(`/posts/users/${postId}`);
        console.log(postId);
    }

    return (
        <div className='d-flex flex-wrap justify-content-center gap-2'>
            {userPosts.map((post, index) => (
                <div className="box" key={post.id} onClick={() => navigateToPost(post.id)}>
                    <div className="fw-bold">{post.title}</div>
                    <div className="">{post.body}</div>
                </div>
            ))}
        </div>
    );
};

export default UserPosts;