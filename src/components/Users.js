import React from 'react';

const Users = ({user}) => {
    return (

            <div className="profile">
                <h1>{user.name}</h1>

                <div className="section">
                    <h5>Contact Information</h5>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                </div>

                <div className="section">
                    <p>
                        <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city},<br/> {user.address.zipcode}, {user.address.geo.lat}
                    </p>
                </div>

                <div className="section">
                    <h5>Company</h5>
                    <p><strong>Name:</strong> {user.company.name}</p>
                    <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                    <p><strong>Business:</strong> {user.company.bs}</p>
                </div>
            </div>

    );
};

export default Users;