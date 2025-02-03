import React from 'react';
import {useState, useEffect} from 'react'

const MyProfile = () => {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken'); // Get the auth token from localStorage

    useEffect(() => {
        if (!loggedInUser || !token) {
            setError('You must be logged in to view your profile');
            return;
        }

        // Fetch notifications from the backend
        fetch('http://localhost:2007/getnotifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ secretKey: loggedInUser.secretKey }),
        })
            .then(res => res.json())
            .then(response => {
                if (response.error) {
                    setError(response.message);
                } else {
                    setNotifications(response.notifications);
                }
            })
            .catch(err => setError('Failed to fetch notifications'));
    }, [loggedInUser, token]);

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    return (
        <div>
            <h1>{loggedInUser ? loggedInUser.username : 'Loading...'}</h1>

            <h3>Notifications</h3>
            {error && <div>{error}</div>}

            {notifications.length > 0 ? (
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index}>
                            {notification.message} <span>({notification.time})</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No notifications yet.</p>
            )}
        </div>

    );
};

export default MyProfile;