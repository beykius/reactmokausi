import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const SingleUserInfo = () => {
    const {userId} = useParams();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserInfo(data));
    }, [userId]);

    const handleUserClick = () => {
        navigate(`/posts/${userId}`);
    };

    const handleUserClickToAlbums = () => {
        navigate(`/albums/${userId}`);
    };

    const handleUserClickToTodos = () => {
        navigate(`/todos/${userId}`);
    };

    return (
        <div className='d-flex gap-2 align-content-center'>
            <div>

                <div className="profile border-1 me-1 mb-1">
                    <div><b>Name:</b> {userInfo.name}</div>
                    <div><b>Username:</b> {userInfo.username}</div>
                    <div><b>Email:</b> {userInfo.email}</div>
                </div>

            </div>
            <div className='profile'>
                <b>Links to:</b>
                <div onClick={handleUserClick}>* User Posts</div>
                <div onClick={handleUserClickToAlbums}>* User Albums</div>
                <div onClick={handleUserClickToTodos}>* User Todos</div>
            </div>
        </div>
    );
};

export default SingleUserInfo;