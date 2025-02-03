import React from 'react';
import {useState, useEffect} from 'react'
import {useRef} from "react";
import useStore from "../store/main";

const CreateUser = ({setError}) => {
    const [usernameValid, setUsernameValid] = useState(true);
    const [ageValid, setAgeValid] = useState(true);
    const [raceValid, setRaceValid] = useState(true);
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const raceRef = useRef();
    const allowedRaces = ['indian', 'african', 'asian', 'european'];

    const handleAddUser = () => {
        if (nameRef.current.value[0] !== nameRef.current.value[0].toUpperCase()) {
            setUsernameValid(false);
            setError("Username must start with an uppercase letter");
            return;
        } else {
            setUsernameValid(true);
            setError(null);
        }

        if (nameRef.current.value < 4 && nameRef.current.value > 20) {
            setUsernameValid(false);
            setError("Username must be shorter than 20 characters and longer than 4 characters.");
            return;
        } else {
            setUsernameValid(true);
            setError(null);
        }

        if (ageRef.current.value  <= 18 ||ageRef.current.value.age >= 80) {
            setAgeValid(false);
            setError("User must be older than 18 and younger than 80.");
            return;
        } else {
            setAgeValid(true);
            setError(null);
        }

        if (!allowedRaces.includes(raceRef.current.value.toLowerCase())) {
            setRaceValid(false);
            setError("User must be indian, asian, african, or european.");
            return;
        } else {
            setRaceValid(true);
            setError(null);
        }

        const user = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            gender: genderRef.current.value,
            race: raceRef.current.value,
        };

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:2007/createuser", options)
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
                placeholder="Username"
                type="text"
                ref={nameRef}
                style={{
                    border: !usernameValid ? '1px solid red' : '1px solid grey',
                }}
            />
            <input
                placeholder="Age"
                type="number"
                ref={ageRef}
                style={{
                    border: !ageValid ? '1px solid red' : '1px solid grey',
                }}
            />
            <input placeholder="Gender" type="text" ref={genderRef} />
            <input placeholder="Race" type="text" ref={raceRef} style={{border: !raceValid ? '1px solid red' : '1px solid grey',}}/>
            <button onClick={handleAddUser}>Add user</button>
        </div>
    );
};

export default CreateUser;