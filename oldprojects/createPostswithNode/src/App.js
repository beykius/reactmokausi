import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";


function App() {



    return (

            <BrowserRouter>
                <div>
                    <div className="mb-5">

                    </div>
                    <Routes>

                        <Route path="/createpost" element={<CreatePost />} />
                        <Route path="/" element={<Posts />} />


                    </Routes>
                </div>
            </BrowserRouter>

    );
}

export default App;