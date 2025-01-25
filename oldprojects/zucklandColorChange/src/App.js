import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Comp2 from "./Components/Comp2";

function App() {



    return (
        <div className='d-flex'>
          <div className='flex-grow-1'><Login /></div>
          <div className='flex-grow-1'><Comp2 /></div>
        </div>
    );
}

export default App;