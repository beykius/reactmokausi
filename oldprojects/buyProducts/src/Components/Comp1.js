import React from 'react';
import useStore from '../store/main';

const Comp1 = () => {

    const products = useStore((state) => state.products);
    const buyProduct = useStore((state) => state.buyProduct);

    return (
        <div className="d-flex justify-content-center gap-4">
            {products.map((product, index) => (
                <div key={index} onClick={() => buyProduct(product)}>
                    <div >{product.icon}</div>
                    <div>Price: {product.price}</div>
                </div>

            ))} </div>

    )
        ;
};

export default Comp1;