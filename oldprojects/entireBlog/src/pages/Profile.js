import React from 'react';
import useStore from "../store/main";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const loggedInUser = useStore((state) => state.loggedInUser);
    const handleImageChange = useStore((state) => state.handleImageChange);
    const deleteProfile = useStore((state) => state.deleteProfile);
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState(loggedInUser.imageUrl);
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [passwordError, setPasswordError] = useState('');


// IMAGE CHANGE
    const handleInputChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = () => {
        handleImageChange(imageUrl);
    };

// DELETE PROFILE
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleDeleteProfile = () => {
        setShowModal(true);
        console.log('setShowModal', showModal);
    };

    const confirmDelete = () => {
        if (password === loggedInUser.password) {
            deleteProfile(loggedInUser.name);
            setPasswordError('');
            setShowModal(false);
            navigate('/');
            console.log('Profile deleted');
        } else {
            setPasswordError('Wrong password');
        }
    };

    const cancelDelete = () => {
        setPassword('');
        setPasswordError('');
        setShowModal(false);
    };


    return (
        <div className='d-flex m-5'>
            <div>
                <img
                    src={loggedInUser.imageUrl}
                    alt={`${loggedInUser.name}`}
                    style={{width: '100px', height: 'auto'}}/>
                <input
                    type="text"
                    placeholder="Change Image Url"
                    name="imageUrl"
                    value={loggedInUser.imageUrl}
                    onChange={handleInputChange}
                    required
                />
                <button onClick={handleSubmit}>Submit</button>
                <div>{loggedInUser.name}</div>
                <button onClick={handleDeleteProfile}>Delete Profile</button>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Confirm Profile Deletion</h3>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <div className="error">{passwordError}</div>}
                            <div className="modal-actions">
                                <button onClick={confirmDelete}>Confirm</button>
                                <button onClick={cancelDelete}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Profile;