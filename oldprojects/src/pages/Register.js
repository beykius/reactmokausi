import React, { useState } from 'react';

const Register = () => {

    const [myUser, setMyUser] = useState({
        name: '',
        passwordOne: '',
        passwordTwo: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMyUser({
            ...myUser,
            [name]: value,
        });
    };

    const handleRegister = () => {
        if (myUser.passwordOne !== myUser.passwordTwo) {
            setError("Passwords do not match!");
            return;
        }

        console.log("Sending registration data:", myUser);

        fetch('http://167.99.138.67:1111/createaccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myUser),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/login';
                } else {
                    setError(data.message || 'Registration failed!');
                }
            })
            .catch(error => {
                setError('An error occurred: ' + error.message);
            });
    };
    console.log('Registering with user:', myUser);
    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                name="name"
                value={myUser.name}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="passwordOne"
                value={myUser.passwordOne}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                placeholder="Repeat Password"
                name="passwordTwo"
                value={myUser.passwordTwo}
                onChange={handleChange}
                required
            />
            <button onClick={handleRegister}>Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Register;