import React from 'react';
import {useState, useEffect} from 'react'
import useStore from '../store/main';

const MyProfile = () => {
    const loggedInUser = useStore((state) => state.loggedInUser);
    const [notifications, setNotifications] = useState([]);
    const pokeBack = useStore((state) => state.pokeBack);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [password, setPassword] = useState('');
    const addPokeBackNotification = useStore((state) => state.addPokeBackNotification);
    const pokedBackNotifications = useStore.getState().pokedBackNotifications;


    useEffect(() => {
        if (loggedInUser?.secretKey) {
            fetch('http://localhost:2007/getnotifications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    secretKey: loggedInUser.secretKey,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setNotifications(data.notifications || []);
                });
        }

    }, [loggedInUser]);


    const handlePokeBack = (pokedUserUsername) => {
        if (!loggedInUser) return;

        console.log('Poke back triggered for:', pokedUserUsername);
        pokeBack(pokedUserUsername);
        addPokeBackNotification(pokedUserUsername, loggedInUser.username);


        console.log('Current pokedBackNotifications:', pokedBackNotifications);

        alert(`You poked back ${pokedUserUsername}!`);
    };


    const handleDeleteAccount = () => {
        fetch('http://localhost:2007/deleteUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: loggedInUser.username,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.message);
                } else {
                    alert('Account deleted successfully!');
                    window.location.href = '/';
                }
            })
            .catch(() => alert('Error deleting account.'));
    };

    return (
        <div>
            <h1>{loggedInUser ? loggedInUser.username : 'Loading...'}</h1>
            <h5>Pokes: {notifications.length + pokedBackNotifications.length}</h5>
            {/* Delete Account Button */}
            <div>
                <button onClick={() => setShowDeleteModal(true)}>Delete Account</button>
            </div>

            {/* Delete Account Modal */}
            {showDeleteModal && (
                <div className="modal">
                    <h3>Confirm Deletion</h3>
                    <p>Enter your password to delete your account:</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                    <button onClick={handleDeleteAccount}>Confirm</button>
                    <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
                </div>
            )}

            <div >
                {notifications.length > 0 ? (
                    notifications.map((notif, index) => (
                        <div key={index} className='box mb-2'>
                            <p>{notif.message}</p>
                            <small>{notif.timestamp}</small>
                            <button
                                onClick={() => handlePokeBack(notif.message.split(' ')[0])} // Extract username from message
                            >
                                Poke back
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No notifications yet.</p>
                )}

                {pokedBackNotifications.length > 0 ? (
                    pokedBackNotifications.map((notif, index) => (
                        <div key={index} className="box mb-2">
                            <p>{notif.message}</p>
                            <small>{notif.timestamp}</small>
                        </div>
                    ))
                ) : (
                    <p>No poked back notifications yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyProfile;