import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = ({ isLoggedIn }) => {
    return (
        <div className="topnav">
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Toolbar;