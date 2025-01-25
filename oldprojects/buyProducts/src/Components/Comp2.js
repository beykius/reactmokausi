import React from 'react';
import useStore from '../store/main';

const Comp2 = () => {
    const purchasedProducts = useStore((state) => state.purchasedProducts);

    return (
        <div>
            <h3>Bought Products</h3>
            <div className="d-flex gap-4">
                {purchasedProducts.map((product, index) => (
                    <div key={index}>
                        <div>{product.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comp2;