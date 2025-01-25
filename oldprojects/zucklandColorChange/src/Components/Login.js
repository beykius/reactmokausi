import React from 'react';
import useStore from '../store/main';

const Login = () => {

    const loginInfo = useStore((state) => state.loginInfo);
    const error = useStore((state) => state.error);
    const handleChangeLogin = useStore((state) => state.handleChangeLogin);

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                name="name"
                value={loginInfo.name}
                onChange={handleChangeLogin}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginInfo.password}
                onChange={handleChangeLogin}
                required
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default Login;