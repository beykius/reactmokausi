import React, { useState, useEffect } from 'react';
import DeckInfo from './DeckInfo';
import CardDrawer from './CardDrawer';
import DrawnCards from './DrawnCards';

function Game() {
    const [deckId, setDeckId] = useState('');
    const [remaining, setRemaining] = useState(0);
    const [drawnCards, setDrawnCards] = useState([]);

    useEffect(() => {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
            .then(response => response.json())
            .then(data => {
                setDeckId(data.deck_id);
                setRemaining(data.remaining);
            });
    }, []);

    const drawCard = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setDrawnCards(prevCards => [...prevCards, ...data.cards]);
                setRemaining(data.remaining);
            })
            .catch(error => {
                console.error('Error fetching card:', error);
                alert('Failed to draw card. Please try again later.');
            });
    };

    const shuffleDeck = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
            .then(() => {
                setDrawnCards([]);
                setRemaining(52);
            });
    };

    return (
        <div>
            <DeckInfo deckId={deckId} remaining={remaining} />
            <CardDrawer drawnCards={drawnCards} drawCard={drawCard} remaining={remaining} shuffleDeck={shuffleDeck} />
            <DrawnCards drawnCards={drawnCards} />
        </div>
    );
}

export default Game;