import React from 'react';

const WaterPlants = ({ boughtPlants, onWater, onSell }) => {
    const getPrice = (icon) => {
        const priceMap = {
            '🌹': 15,
            '🌺': 20,
            '🌻': 35
        };
        return priceMap[icon];
    };

    return (
        <div className="row">
            {boughtPlants.map((plant, i) => (
                <div key={i} className="box">
                    <div className="h1">{plant.icon}</div>
                    <div className="progress mb-1">
                        <div className="progress-bar" role="progressbar" aria-valuenow={plant.progress} aria-valuemin="0"
                             aria-valuemax="100"
                             style={{ width: `${plant.progress}%` }}></div>
                    </div>
                    {plant.progress < 100 && (
                        <button className="me-1" onClick={() => onWater(i)}>Water</button>
                    )}
                    {plant.progress === 100 && (
                        <button onClick={() => onSell(i)}>   Sell for ${getPrice(plant.icon)}</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default WaterPlants;