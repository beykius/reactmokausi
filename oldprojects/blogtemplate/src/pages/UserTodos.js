import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const UserTodos = () => {

    const { userId } = useParams();
    const [userTodos, setUserTodos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(res => res.json())
            .then(data => setUserTodos(data));
    }, [userId]);
    return (
        <div className='d-flex flex-wrap justify-content-center gap-2'>
            {userTodos.map((post, index) => (
                <div
                    className="box"
                    key={post.id}
                    style={post.completed ? { backgroundColor: "lightgreen" } : { backgroundColor: "indianred" }}

                >
                    <div className="fw-bold">{post.title}</div>
                </div>
            ))}
        </div>
    );
};

export default UserTodos;