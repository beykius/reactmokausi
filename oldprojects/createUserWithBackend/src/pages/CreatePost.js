import React, { useState } from 'react';

const CreatePost = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', imageUrl: '' });

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePost = (e) => {
        e.preventDefault();

        const postToCreate = {
            ...newPost,
        };

        fetch("http://localhost:2005/createpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postToCreate),
        })
            .then((response) => response.json())
            .then((data) => {
                // Use the data returned from the server, which includes the generated ID
                setPosts((prevPosts) => [...prevPosts, ...data.posts]);
                setNewPost({ title: "", imageUrl: "" });
                alert("Post created successfully!");
            })
            .catch((error) => {
                alert("Error creating post.");
            });
    };

    return (
        <div className="d-flex justify-content-center gap-4">
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newPost.title}
                    onChange={handlePostChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Image Url"
                    name="imageUrl"
                    value={newPost.imageUrl}
                    onChange={handlePostChange}
                    required
                />

                <button onClick={handlePost}>Submit</button>
            </div>


        </div>
    );
};

export default CreatePost;