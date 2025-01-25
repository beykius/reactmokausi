import React from 'react';

function DrawnCards({ drawnCards }) {
    return (
        <div>
            <h2>Drawn Cards</h2>
            <div>
                {drawnCards.map((card, index) => (
                    <img key={index} src={card.image} alt={`${card.value} of ${card.suit}`} />
                ))}
            </div>
        </div>
    );
}


export default DrawnCards;