import React from 'react';

function CardDrawer({ drawnCards, drawCard, remaining, shuffleDeck }) {
    const lastCard = drawnCards[drawnCards.length - 1];

    return (
        <div>
            <h2>Card Drawer</h2>
            {lastCard && (
                <div>
                    <p>Last Card Drawn: {lastCard.value} of {lastCard.suit}</p>
                    <img src={lastCard.image} alt={`${lastCard.value} of ${lastCard.suit}`} />
                </div>
            )}
            {remaining > 0 ? (
                <button onClick={drawCard}>Draw Card</button>
            ) : (
                <button onClick={shuffleDeck}>Shuffle Deck</button>
            )}
        </div>
    );
}

export default CardDrawer;