import React from 'react';
import useStore from '../store/main';

const Toolbat = () => {

    const money = useStore(state => state.money);
    const purchasedProducts = useStore((state) => state.purchasedProducts);
    const totalSpent = useStore(state => state.totalSpent);

    return (
        <div className='d-flex gap-4 justify-content-center'>
            <div className="money">Money: ${money}</div>
            <div className="money">Money spent: ${totalSpent}</div>
            <div className="">Products owned: {purchasedProducts.length}</div>
        </div>
    );
};

export default Toolbat;