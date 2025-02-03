import React from 'react';
import useStore from "../store/main";
import {useEffect, useState} from "react";

const UserList = () => {

    const setAllUsers = useStore((state) => state.setAllUsers);
    const allUsers = useStore(state => state.allUsers);

    useEffect(() => {

        fetch(`http://localhost:2007/`)
            .then(res => res.json())
            .then(response => {
                setAllUsers(response)
            })

    }, [])
    return (
        <div>
            {allUsers.map((user) => (
                <div key={user.id} className='d-flex gap-3 box'>
                    <div>Username: {user.name}</div>
                    <div>Age: {user.age}</div>
                </div>
            ))}
        </div>
    );
};

export default UserList;