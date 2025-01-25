import React from 'react';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SinglePost = () => {
    console.log('works')
    const { postId } = useParams();
    const [singlePost, setSinglePost] = useState([]);

    useEffect(() => {
        console.log("Fetching post with ID:", postId);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Post data:", data);
                setSinglePost(data);
            });
    }, [postId]);

    return (
        <div className='profile'>
                <h2>{singlePost.title}</h2>
                <p>{singlePost.body}</p>
        </div>
    );
};

export default SinglePost; 