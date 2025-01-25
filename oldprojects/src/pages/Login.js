import React, { useState } from 'react';

const Login = ({secretKey}) => {
    const [loginInfo, setLoginInfo] = useState({
        name: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value,
        });
    };

    const handleLogin = () => {
        fetch('http://167.99.138.67:1111/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Login response data:", data);
                if (data.success) {
                    secretKey(data.secretKey);
                    localStorage.setItem('username', loginInfo.name);
                } else {
                    setError(data.message || 'Login failed!');
                }
            })
            .catch(error => {
                setError('An error occurred: ' + error.message);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                name="name"
                value={loginInfo.name}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                required
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;