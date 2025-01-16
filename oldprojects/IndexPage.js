import React, {useEffect, useState} from 'react';

const IndexPage = ({ setCart, setSum }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);


    function addToCart(product) {
        setCart(prevCart => {
            const newCart = [...prevCart, product];
            return newCart;
        });
    }


    console.log(setCart);
    return (

        <div className='d-flex flex-wrap gap-3 justify-content-center'>
            {products.slice(0, 10).map((product, index) => (
            <div className="box ">
                <img src={product.image} alt={`Image ${index + 1}`} />
                <div className='title'>{product.title}</div>
                <center><h5>{product.price}$</h5></center>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>

        ))}
        </div>
    );
};

export default IndexPage;