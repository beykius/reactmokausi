import React, {useState, useEffect} from 'react';
import useStore from "../store/main";


const AllUsers = () => {
    const setAllUsers = useStore((state) => state.setAllUsers);
    const allUsers = useStore(state => state.allUsers);
    const loggedInUser = useStore((state) => state.loggedInUser);



    const pokeUser = (pokedUserUsername) => {
        fetch("http://localhost:2007/poke", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pokingUserSecretKey: loggedInUser.secretKey,
                pokedUserUsername: pokedUserUsername,
            })
        })
            .then(res => res.json())
            .then(response => {
                if (response.error) {
                    alert(response.message);
                } else {
                    alert('Poked successfully!');
                }
            });
    };




    useEffect(() => {

        fetch(`http://localhost:2007/users`)
            .then(res => res.json())
            .then(response => {
                setAllUsers(response)
            })

    }, [])

    console.log('allUser', allUsers)
    console.log('loggedIn', loggedInUser)
    return (
        <div className='d-flex flex-wrap gap-10'>
            {allUsers.map((user) => (
                <div key={user.secretKey} className='d-flex gap-3 box me-2' >
                    <div>Username: {user.username} </div>
                    {user.username === loggedInUser.username ? '' : <button onClick={() => pokeUser(user.username)}>Poke</button>}
                </div>
            ))}
        </div>
    );
};

export default AllUsers;