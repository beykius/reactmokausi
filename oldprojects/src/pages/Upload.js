import React, { useRef } from 'react';

const Upload = ({ secretKey }) => {
    const imageRef = useRef('');
    const titleRef = useRef('');
    const descriptionRef = useRef('');

    const uploadArticle = () => {
        const newPost = {
            secretKey: secretKey,
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
        };

        console.log(newPost.secretKey);

        fetch('http://167.99.138.67:1111/createpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Post uploaded successfully!');
                    titleRef.current.value = '';
                    imageRef.current.value = '';
                    descriptionRef.current.value = '';
                } else {
                    alert('Failed to upload post: ' + data.message);
                }
            });
    };

    return (
        <div>
            <input type="text" placeholder="Image URL" ref={imageRef} />
            <input type="text" placeholder="Title" ref={titleRef} />
            <input type="text" placeholder="Description" ref={descriptionRef} />
            <button onClick={uploadArticle}>Submit</button>
        </div>
    );
};

export default Upload;