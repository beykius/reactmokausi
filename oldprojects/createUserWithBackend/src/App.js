import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import UserList from "./Components/UserList";
import MyProfile from "./Components/MyProfile";


function App() {
    const [error, setError] = useState(null); const [error, setError] = useState(null);

    return (


            <div>
                <div className="mb-5 text-center p-2">
                    {error && <div className="error">{error}</div>}
                </div>
                <div className="d-flex justify-content-center gap-5">

                            <CreateUser setError={setError}/>
                            <UserList/>
                    <MyProfile/>
                </div>



        </div>

)
    ;
}

export default App;