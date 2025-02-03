import React from 'react';
import useStore from '../store/main';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Toolbat = () => {

    const loggedInUser = useStore((state) => state.loggedInUser);
    const logout = useStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    return (
        <div className="topnav">
            {!loggedInUser ? (
                <>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </>
            ) : (
                <>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/userslist'>User's list</Link>
                    <Link to='/createpost'>Create Post</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/messages'>Messages</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Toolbat;