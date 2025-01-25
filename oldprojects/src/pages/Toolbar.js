import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = ({ isLoggedIn }) => {
    return (
        <div className="topnav">
            {!isLoggedIn && (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            )}
            {isLoggedIn && <Link to='/upload'>Upload</Link>}
            <Link to='/'>Posts</Link>
            <Link to='/user'>User</Link>
        </div>
    );
};

export default Toolbar;