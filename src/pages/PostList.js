import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const PostList = ({ posts, handleDelete, showUpdate }) => {
    const loggedInUsername = localStorage.getItem('username'); // Get the logged-in username
    const navigate = useNavigate();

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {posts.map((post, index) => (
                <div className="cartBox d-flex me-2" key={index}>
                    <img className='me-2' src={post.image} alt={`Post ${index + 1}`} />
                    <div>
                        <div className="title text-break">
                            <Link to={`/user/${post.username}/${post.id}`}>{post.title}</Link>
                        </div>
                        <p className='text-break'>{post.description}</p>
                        <p><Link to={`/user/${post.username}`}>{post.username}</Link></p>
                        {loggedInUsername === post.username && (
                            <button className='me-2' onClick={() => handleDelete(post.id)}>Delete</button>
                        )}
                        {loggedInUsername === post.username && (
                            <button onClick={() => navigate(`/UpdatePost/${post.id}`)}>Update Post</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;