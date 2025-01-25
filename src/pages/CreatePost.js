import React from 'react';
import useStore from "../store/main";

const CreatePost = () => {

    const newPost = useStore((state) => state.newPost);
    const handlePost = useStore((state) => state.handlePost);
    const handlePostChange = useStore((state) => state.handlePostChange);
    const error = useStore((state) => state.error);



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
                    placeholder="Description"
                    name="description"
                    value={newPost.description}
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
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>

        </div>

    );
};

export default CreatePost;