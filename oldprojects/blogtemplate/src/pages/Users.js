import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const navigateToUser = (userId) => {
        navigate(`/users/${userId}`);
    }
    return (
        <div className='d-flex flex-wrap justify-content-center '>
            {user.map((post, index) => (
                <div key={index}
                     className="box me-1 mb-1"
                     onClick={() => navigateToUser(post.id)}
                >
                    <div>🤵🏻‍♀️Name: {post.name}</div>
                    <div>🧑🏻‍💼Username: {post.username}</div>
                    <div>✉️Email: {post.email}</div>
                </div>
            ))}
        </div>

    );
};

export default Users;