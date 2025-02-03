import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Toolbat from "./Components/Toolbat";
import UsersList from "./pages/UsersList";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import Messages from './pages/Messages';

function App() {



    return (

            <BrowserRouter>
                <div>
                    <div className="mb-5">
                        <Toolbat />
                    </div>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/userslist" element={<UsersList />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/createpost" element={<CreatePost />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/post/:id" element={<SinglePost />} />
                        <Route path="/messages" element={<Messages />} />

                    </Routes>
                </div>
            </BrowserRouter>

    );
}

export default App;