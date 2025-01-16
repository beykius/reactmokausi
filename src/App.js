import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AnotherIndex from './pages/AnotherIndex';
import UserPage from "./pages/UserPage";
import SinglePost from './pages/SinglePost';
import Register from './pages/Register';
import Login from './pages/Login';
import Toolbar from './pages/Toolbar';
import Upload from './pages/Upload';
import UpdatePost from './pages/UpdatePost';

function App() {
    const [products, setProducts] = useState([]);
    const [secretKey, setSecretKey] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        fetch('http://167.99.138.67:1111/getallposts')
            .then(res => res.json())
            .then(data => setProducts(data.data));
    }, []);

    const handleLoginSuccess = (key, name) => {
        setSecretKey(key);
        setIsLoggedIn(true);
    };

    const handleDelete = (postId) => {
        const postToDelete = {
            secretKey: secretKey,
            id: postId,
        };

        fetch('http://167.99.138.67:1111/deletepost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postToDelete),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setProducts(prevProducts => prevProducts.filter(product => product.id !== postId));
                    alert('Post deleted successfully!');

                } else {
                    alert('Failed to delete post: ' + data.message);
                }
            });
    };


    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar isLoggedIn={isLoggedIn} />
                </div>
                <div className="d-flex justify-content-center">
                    <Routes>
                        <Route path='/login/' element={<Login secretKey={handleLoginSuccess} />} />
                        <Route path='/register/' element={<Register />} />
                        <Route path='/UpdatePost/:id' element={<UpdatePost secretKey={secretKey}/>} />
                        <Route path='/user/:username' element={<UserPage handleDelete={handleDelete} />} />
                        <Route path='/upload/' element={<Upload secretKey={secretKey} />} />
                        <Route
                            path='/user/:username/:postId'
                            element={<SinglePost handleDelete={handleDelete} />}
                        />
                        <Route path="/" element={<AnotherIndex products={products} secretKey={secretKey} setProducts={setProducts} handleDelete={handleDelete}/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;