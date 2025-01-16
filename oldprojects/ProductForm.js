import React, { useState } from 'react';

function ProductForm({ createProduct }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(title, image);
        setTitle('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
            </div>
            <button type="submit">Create</button>
        </form>
    );
}

export default ProductForm;
