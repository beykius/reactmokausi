import React, {useState} from 'react';
import useStore from "../store/main";

const Messages = () => {
    const registeredUsers = useStore((state) => state.registeredUsers);
    const loggedInUser = useStore((state) => state.loggedInUser);
    const allMessages = useStore((state) => state.allMessages);
    const [message, setMessage] = useState('');
    const handleMessages = useStore((state) => state.handleMessages);
    const [selectedRecipient, setSelectedRecipient] = useState(null);

    const filteredMessages = allMessages.filter(
        (message) =>
            (message.author === loggedInUser.name && message.recipient === selectedRecipient?.name) ||
            (message.author === selectedRecipient?.name && message.recipient === loggedInUser.name)
    );

    // Function to handle selecting a user to view messages
    const handleUserClick = (user) => {
        setSelectedRecipient(user);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // Send the message
    const handleSendMessage = () => {
        if (message.trim() !== '' && selectedRecipient) {
            handleMessages(message, selectedRecipient);
            setMessage('');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center gap-5'>
            <div className="messages-container d-flex gap-5"
                 style={{ width: '80%',}}>
                {/*// LEFT SIDE*/}
                <div className="users-list" style={{width: '30%', borderRight: '1px solid #ddd'}}>
                    <h3>Users</h3>
                    {registeredUsers
                        .filter((user) => user.name !== loggedInUser.name)
                        .map((user, index) => (
                            <div key={index}>
                                <div className=''>Conversation with:</div>
                                <div className='mb-2 box' onClick={() => handleUserClick(user)}>
                                    <img
                                        src={user.imageUrl}
                                        alt={`${user.name}`}
                                        style={{width: '40px', height: 'auto', marginRight: '10px'}}
                                    />
                                    {user.name}
                                </div>
                            </div>
                        ))}
                </div>

                {/*// RIGHT SIDE*/}
                <div className="messages-box" style={{width: '70%'}}>
                    {selectedRecipient ? (
                        <div>
                            <h3>Messages with {selectedRecipient.name}</h3>
                            <div className="messages-list"
                                 style={{
                                     maxHeight: '70vh',
                                     overflowY: 'scroll',
                                     display: 'flex',
                                     flexDirection: 'column',
                                 }}>
                                {filteredMessages.length === 0 ? (
                                    <p>No messages yet.</p>
                                ) : (
                                    filteredMessages.map((message, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundColor: message.author === loggedInUser.name ? '#e1f5fe' : '#f1f8e9',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                marginBottom: '8px',
                                                maxWidth: '40%',
                                                marginRight: '5px',
                                                alignSelf: message.author === loggedInUser.name ? 'flex-end' : 'flex-start',
                                            }}
                                        >
                                            <strong>{message.author}</strong> ({message.time}):
                                            <p>{message.message}</p>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Write a message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    style={{width: '80%'}}
                                />
                                <button onClick={handleSendMessage} style={{marginLeft: '10px'}}>
                                    Send
                                </button>
                            </div>

                        </div>
                    ) : (
                        <p>Select a user to view messages.</p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Messages;