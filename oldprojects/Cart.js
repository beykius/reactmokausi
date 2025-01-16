import React from 'react';

const Cart = ({cart, setCart, sum, setSum}) => {



    function removeFromCart(productToRemove) {
        setCart((prevCart) => prevCart.filter(product => product.id !== productToRemove.id));

    }

    let totalSum = 0;
    for (let i = 0; i < cart.length; i++) {
        totalSum += cart[i].price
    }
    totalSum = parseFloat(totalSum.toFixed(2));
    return (
        <div>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <>
                    <p>Total sum: {totalSum}$</p>
                    {cart.map((product, index) => (
                        <div className="cartBox d-flex" key={index}>
                            <img src={product.image} alt={`Image ${index + 1}`}/>
                            <div>
                                <div className="title">{product.title}</div>
                                <center><h5>{product.price}$</h5></center>
                            </div>
                            <button onClick={() => removeFromCart(product)}>Remove</button>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Cart;