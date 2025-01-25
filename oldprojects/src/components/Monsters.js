import React from 'react';

const Monsters = ({monster, isSelected, onClick,}) => {
    console.log('isSelected:', isSelected);
    return (
        <div className={`box ${isSelected ? 'selected' : ''}`}
             onClick={onClick}
             style={{ cursor: 'pointer' }}>
            <div className="monster">{monster.icon}</div>
            <div>Inflicts damage: {monster.damage}</div>
            <div className="progress mb-1">
                <div className="progress-bar" role="progressbar" aria-valuenow={monster.hp} aria-valuemin="0"
                     aria-valuemax="100"
                     style={{width: `${monster.hp}%`}}></div>
            </div>

        </div>

    );
};

export default Monsters;