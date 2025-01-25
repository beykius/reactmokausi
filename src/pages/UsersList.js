import React from 'react';
import useStore from "../store/main";
import {useState} from "react";

const UsersList = () => {

    const registeredUsers = useStore((state) => state.registeredUsers);
    const loggedInUser = useStore((state) => state.loggedInUser);
    const handleMessages = useStore((state) => state.handleMessages);
    const setSelectedRecipient = useStore((state) => state.setSelectedRecipient);
    const [message, setMessage] = useState('');


    const [showModal, setShowModal] = useState(false);
    const [messageRecipient, setMessageRecipient] = useState('');

    const handleSendMessage = (recipient) => {
        setMessageRecipient(recipient);
        setSelectedRecipient(recipient);
        setShowModal(true);
    };

    const cancelSend = () => {
        setMessageRecipient('');
        setMessage('')
        setShowModal(false);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleConfirmSend = () => {
        if (messageRecipient) {
            handleMessages(message, messageRecipient);
        }
        setMessage('');
        setShowModal(false);
    };

    return (
        <div className='m-5 d-flex gap-5'>
            {registeredUsers.map((user, index) => (
                <div className="d-flex gap-1" key={index}>
                    <div>
                        <img
                            src={user.imageUrl}
                            alt={`${user.name}`}
                            style={{ width: '100px', height: 'auto' }}
                        />
                    </div>
                    <div><div>{user.name}</div>
                        {user.name !== loggedInUser.name
                            ? <p>
                                <button onClick={() => handleSendMessage(user)}>Send message</button>
                            </p>
                            : null}</div>

                    {showModal && messageRecipient && (
                        <div className="modal">
                            <div className="modal-content">
                                <h3>Send a message to {messageRecipient.name}</h3>
                                <input
                                    type="text"
                                    placeholder="Write a message"
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                                <div className="modal-actions">
                                    <button onClick={handleConfirmSend}>Confirm</button>
                                    <button onClick={cancelSend}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>


            ))}
        </div>
    );
};

export default UsersList;