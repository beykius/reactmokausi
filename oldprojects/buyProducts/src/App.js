import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Toolbat from "./Components/Toolbat";

function App() {



    return (
        <div >
            <div className='mb-5'><Toolbat/></div>
            <div className='d-flex'>
                <div className='flex-grow-1'><Comp1/></div>
                <div className='flex-grow-1'><Comp2/></div>
            </div>

        </div>
    );
}

export default App;