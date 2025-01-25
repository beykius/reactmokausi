import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const UserAlbums = () => {

    const { userId } = useParams();
    const [userAlbums, setUserAlbums] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(res => res.json())
            .then(data => setUserAlbums(data));
    }, [userId]);


    const handleNavigate = (albumId) => {
        navigate(`/photos/${albumId}`);
    }

    return (
        <div className='d-flex flex-wrap justify-content-center gap-2'>
            {userAlbums.map((post, index) => (
                <div className="box" key={post.id} onClick={() => handleNavigate(post.id)}>
                    <div className="">{post.title}</div>
                </div>
            ))}
        </div>
    );
};

export default UserAlbums;