import React from 'react';

function Product({ product, sellProduct }) {
    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={sellProduct}>Sell</button>
        </div>
    );
}

export default Product;
