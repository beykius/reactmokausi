import React, {useEffect, useState} from 'react';

const UserProfile = () => {


    const [ posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {setPosts(data);})
    }, [])


    return (
        <div className="d-flex flex-wrap">
            {posts.slice(0, 10).map((post, index) => (
                <div className="box">
                    <h5>{post.title}</h5>
                    <div>{post.body}</div>
                </div>
            ))}

        </div>
    );
};

export default UserProfile;