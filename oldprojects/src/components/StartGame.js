import React from 'react';

function StartGame({ onStartGame }) {
    return (
        <div>
            <h1>Welcome to the Card Game</h1>
            <button onClick={onStartGame}>Start Game</button>
        </div>
    );
}

export default StartGame;