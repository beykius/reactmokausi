import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PostList from './PostList';

const AnotherIndex = ({ products,  handleDelete }) => {
    const navigate = useNavigate();
    function showUpdate() {
        navigate('/UpdatePost');
    }

    return (
        <div>
            <PostList posts={products} showUpdate={showUpdate} handleDelete={handleDelete} />
        </div>
    );
};

export default AnotherIndex;