import React from 'react';
import useStore from '../store/main';

const Register = () => {

    const myUser = useStore((state) => state.myUser);
    const error = useStore((state) => state.error);
    const handleChange = useStore((state) => state.handleChange);
    const handleRegister = useStore((state) => state.handleRegister);
    const registeredUsers = useStore((state) => state.registeredUsers);

    console.log(registeredUsers)



    return (
        <div className="d-flex justify-content-center gap-4">
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
                <input
                    type="image Url"
                    placeholder="Image Url"
                    name="imageUrl"
                    value={myUser.imageUrl}
                    onChange={handleChange}
                    required
                />
                <button onClick={handleRegister}>Register</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>

        </div>

    )
        ;
};

export default Register;