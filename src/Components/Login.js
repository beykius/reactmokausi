import React, {useRef, useState} from 'react';
import useStore from '../store/main';

const Login = ({setError}) => {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const setLoggedInUser = useStore((state) => state.setLoggedInUser);
    const loggedInUser = useStore((state) => state.loggedInUser);


    const login = () => {
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:2007/login", options)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                if (response.error) {
                    setError(response.message);
                } else {
                    setError(null);
                    const loggedInUser = response.loggedInUser;

                    setLoggedInUser(loggedInUser);
                    console.log("Logged in ", loggedInUser);
                }
            })
            .catch(err => {
                setError('Something went wrong');
            });

    }
    console.log(loggedInUser)
    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                name="name"
                ref={usernameRef}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="passwordOne"
                ref={passwordRef}
                required
            />
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;