import React, {useState, useEffect} from 'react';
import './App.css';
import useStore from './store/main';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Register from "./Components/Register";
import AllUsers from "./pages/AllUsers";
import Login from "./Components/Login";
import MyProfile from "./pages/MyProfile";
import Logout from "./Components/Logout";

function App() {

    const [error, setError] = useState(null);
    const loggedInUser = useStore((state) => state.loggedInUser);

    return (
        <BrowserRouter>
            <div>
                <div className="mb-5 text-center p-2">
                    {error && <div>{error}</div>}
                </div>

                {/* Navigation Links */}
                <nav>
                    {loggedInUser ? (
                        <>
                            <Link to="/users">Users</Link> |{' '}
                            <Link to="/myprofile">My Profile</Link> |{' '}
                            <Logout/>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link> |{' '}
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </nav>

                {/* Main Content */}
                <div className="d-flex justify-content-center gap-5">
                    <Routes>
                        <Route path="/register" element={<Register setError={setError}/>}/>
                        <Route path="/users" element={<AllUsers/>}/>
                        <Route path="/login" element={<Login setError={setError}/>}/>
                        <Route path="/myprofile" element={<MyProfile/>}/>
                        <Route path="/logout" element={<Logout setError={setError}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;