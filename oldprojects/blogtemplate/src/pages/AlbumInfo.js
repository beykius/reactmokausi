import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const AlbumInfo = () => {
    const {albumId} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => res.json())
            .then(data => setAlbums(data));
    }, [albumId]);

    return (
            <div className='d-flex flex-wrap justify-content-center gap-2'>
                {albums.map((post, index) => (
                    <div className="box" key={post.id}>
                        <div className="">{post.title}</div>
                        <img src='https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' alt={post.alt}  />
                    </div>
                ))}np
            </div>

    );
};

export default AlbumInfo;