import React from 'react';

const SmallPlants = ({plant, onBuy}) => {


    return (
        <div className='box mb-2' onClick={onBuy}>
<div className="h1">{plant.icon}</div>
            <h5>Price: {plant.price}$</h5>
        </div>
    );
};

export default SmallPlants;