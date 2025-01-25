import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Users from "./pages/Users";
import UserPosts from "./pages/UserPosts";
import UserAlbums from "./pages/UserAlbums";
import SingleUserInfo from "./pages/SingleUserInfo";
import UserTodos from "./pages/UserTodos";
import AlbumInfo from "./pages/AlbumInfo";
import SinglePost from "./pages/SinglePost";
import Toolbar from "./pages/Toolbar";

function App() {



    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar/>
                </div>
                <div className="d-flex justify-content-center">

                    <Routes>
                        <Route path="/" element={<Users/>}/>
                        <Route path="posts/:userId" element={<UserPosts/>}/>
                        <Route path="albums/:userId" element={<UserAlbums/>}/>
                        <Route path="users/:userId" element={<SingleUserInfo/>}/>
                        <Route path="todos/:userId" element={<UserTodos/>}/>
                        <Route path="photos/:albumId" element={<AlbumInfo/>}/>
                        <Route path="/posts/users/:postId" element={<SinglePost/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;