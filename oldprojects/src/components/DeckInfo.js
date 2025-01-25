import React from 'react';

function DeckInfo({ deckId, remaining }) {
    return (
        <div>
            <h2>Deck Info</h2>
            <p>Deck ID: {deckId}</p>
            <p>Remaining Cards: {remaining}</p>
        </div>
    );
}

export default DeckInfo;