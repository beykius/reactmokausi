import React from 'react';
import {useRef} from "react";
import {useState} from "react";
import useStore from "../store/main";


const Register = ({setError}) => {
    const usernameRef = useRef();
    const passwordOneRef = useRef();
    const passwordTwoRef = useRef();


    const register = () => {
        const user = {
            username: usernameRef.current.value,
            passwordOne: passwordOneRef.current.value,
            passwordTwo: passwordTwoRef.current.value,
        };

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:2007/register", options)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.success) {
                    setError(null)

                } else {
                    setError(response.message)
                }
            })
    }
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
                ref={passwordOneRef}
                required
            />
            <input
                type="password"
                placeholder="Repeat Password"
                name="passwordTwo"
                ref={passwordTwoRef}
                required
            />
           <button onClick={register} type="submit">Register</button>
        </div>
    );
};

export default Register;