import React from 'react';
import useStore from '../store/main';

const Logout = () => {
    const loggedInUser = useStore((state) => state.loggedInUser); // Get the logged-in user state
    const setLoggedInUser = useStore((state) => state.setLoggedInUser); // Function to update the logged-in user

    // Function to handle logout
    const logout = () => {
        // If no user is logged in, do nothing
        if (!loggedInUser) {
            console.log('No user is logged in');
            return;
        }

        // Send logout request to the backend
        fetch('http://localhost:2007/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: loggedInUser.username,
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    console.error(response.message);
                } else {
                    // Successfully logged out
                    setLoggedInUser('');
                    console.log('User logged out successfully');
                }
            })
            .catch((err) => {
                console.error('Logout failed:', err);
            });
    };

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Logout;