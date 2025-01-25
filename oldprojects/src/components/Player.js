import React from 'react';

const Player = (props) => {
    return (
        <div className={`box`}
             style={{cursor: 'pointer'}}>
            <div className="monster">{props.player}</div>
            <div>Player</div>
            <div className="progress mb-1">
                <div className="progress-bar" role="progressbar" aria-valuenow={props.playerHp} aria-valuemin="0"
                     aria-valuemax="100"
                     style={{width: `${props.playerHp}%`}}></div>
            </div>

        </div>
    );
};

export default Player;