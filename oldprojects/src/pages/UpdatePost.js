import React, {useRef, useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const UpdatePost = ({secretKey}) => {
const navigate = useNavigate();
    const { id } = useParams();
    console.log('id:', id);

    const [post, setPost] = useState(null);

    const imageRef = useRef('');
    const titleRef = useRef('');
    const descriptionRef = useRef('');


    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getpost/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setPost(data.post);
                }
            });
    }, [id]);

    useEffect(() => {
        if (post) {
            titleRef.current.value = post.title;
            imageRef.current.value = post.image;
            descriptionRef.current.value = post.description;
        }
    }, [post]);

    const updateArticle = () => {
        const updatePost = {
            secretKey: secretKey,
            id: id,
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
        };

        console.log('Update Post Data:', updatePost);

        fetch('http://167.99.138.67:1111/updatepost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatePost),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    navigate(`/`)
                }
            });
    };
    return (
        <div>
                <input type="text" placeholder="Image URL" ref={imageRef} />
                <input type="text" placeholder="Title" ref={titleRef} />
                <input type="text" placeholder="Description" ref={descriptionRef} />
                <button onClick={updateArticle}>Update</button>
        </div>
    );
};

export default UpdatePost;