import React, {useEffect, useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from "./tree";
import LightControl from "./lightcontrol";
import Toys from "./toys";
import TimeoutClock from "./timeout";

function App() {
    const [newArr, setNewArr] = useState([]); // State for storing the array
    const [selectedPost, setSelectedPost] = useState(null); // State for the clicked post
    const inpValue = useRef(); // Reference for the name input
    const letterValue = useRef(); // Reference for the letter content input

    function goToArray() {
        if(newArr.length < 10){
        const name = inpValue.current.value; // Get the name input value
        const letterContent = letterValue.current.value; // Get the letter content input value

        if (name && letterContent) {
            const timeAdded = new Date().toLocaleString(); // Get the current time
            const updatedArray = [...newArr]; // Clone the existing array
            updatedArray.push({name, letterContent, timeAdded}); // Add new post
            setNewArr(updatedArray); // Update state with the modified array

            inpValue.current.value = ""; // Clear the name input
            letterValue.current.value = ""; // Clear the letter content input
        } else {
            alert("Please fill out both fields!");
        }}
    }

    function handlePostClick(post) {
        setSelectedPost(post); // Set the clicked post as the selected post
    }


    function deletePost(index) {
        const updatedArray = newArr.filter((_, i) => i !== index); // Remove post by index
        setNewArr(updatedArray);
        if (selectedPost && selectedPost === newArr[index]) {
            setSelectedPost(null); // Clear selected post if it was deleted
        }
    }


    const postCount = newArr.length;
    let progressBarColor = "green";
    if (postCount >= 5 && postCount <= 9) {
        progressBarColor = "yellow";
    } else if (postCount >= 10) {
        progressBarColor = "red";
    }
    const progressBarHeight = `${Math.min(postCount * 10, 100)}%`;

    return (
        <div className="app App-header">
            <div className="keyboard">
                <span className="key">S</span>
                <span className="key">A</span>
                <span className="key">N</span>
                <span className="key">T</span>
                <span className="key">A</span>
                <span className="key">'</span>
                <span className="key">S</span>
                <span className="key"> </span>
                <span className="key">L</span>
                <span className="key">E</span>
                <span className="key">T</span>
                <span className="key">T</span>
                <span className="key">E</span>
                <span className="key">R</span>
                <span className="key">S</span>
            </div>
            <div className="flex box">
                <div>
                    <input placeholder="Sender's name" ref={inpValue}/><br/>
                    <input placeholder="Letter content" ref={letterValue}/><br/>
                    <button onClick={goToArray}>send</button>
                </div>
                <div>
                    <div className="barContainer">
                        <div
                            className="bar"
                            style={{
                                backgroundColor: progressBarColor,
                                height: progressBarHeight,
                                width: "30px", // Fixed width for the bar
                                transition: "height 0.3s ease, background-color 0.3s ease",
                            }}
                        ></div>
                    </div>
                </div>
                {/* List all posts */}
                <div>
                    <ul>
                        {newArr.map((post, index) => (
                            <li
                                key={index}
                                onClick={() => handlePostClick(post)} // Handle click on post
                                style={{cursor: "pointer", margin: "5px 0", padding: "5px", border: "1px solid #ccc"}}
                            >
                                <strong>{post.name}</strong> - <em>{post.timeAdded}</em>
                                <button
                                    onClick={() => deletePost(index)}
                                    style={{
                                        marginLeft: "10px",
                                        backgroundColor: "red",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        padding: "2px 5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Selected Post</h3>
                    {selectedPost ? (
                        <div>
                            <p><strong>Name:</strong> {selectedPost.name}</p>
                            <p><strong>Content:</strong> {selectedPost.letterContent}</p>
                            <p><strong>Time Added:</strong> {selectedPost.timeAdded}</p>
                        </div>
                    ) : (
                        <p>Click on a post to see its details.</p>
                    )}
                </div>
            </div>
        </div>
    )
        ;
}

export default App;