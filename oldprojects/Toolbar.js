
import React from 'react';

function Toolbar({ money, productsSold }) {
    return (
        <header className="d-flex gap-5 justify-content-center m-5  p-2">
            <div>Money: ${money}</div>
            <div>Products Sold: {productsSold}</div>
        </header>
    );
}

export default Toolbar;
