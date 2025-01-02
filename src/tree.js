
import React, { useState, useEffect } from "react";
import "./tree.css";

function Tree({ placedToys, onSpotClick, lightColor }) {
    const spots = Array.from({ length: 15 }, (_, i) => `spot-${i + 1}`);

    const [lightPositions, setLightPositions] = useState(
        Array.from({ length: 20 }, () => ({
            top: `${Math.random() * 80 + 20}%`,
            left: `${Math.random() * 50 + 20}%`,
        }))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setLightPositions(
                Array.from({ length: 20 }, () => ({
                    top: `${Math.random() * 80 + 20}%`,
                    left: `${Math.random() * 50 + 20}%`,
                }))
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    const getSpotPosition = (index) => {
        const rowHeight = 20;

        const row = Math.floor(index / 3);
        const column = index % 3;

        const top = `${20 + row * rowHeight}%`;
        const left = `${(40 - (row * 5)) + (column * 15)}%`;

        return { top, left };
    };

    return (
        <div className="tree">
            {lightPositions.map((position, index) => (
                <div
                    key={`light-${index}`}
                    className="tree-light"
                    style={{
                        backgroundColor: lightColor,
                        top: position.top,
                        left: position.left,
                    }}
                ></div>
            ))}

            {/* Tree spots */}
            {spots.map((spot, index) => {
                const { top, left } = getSpotPosition(index);
                return (
                    <div
                        key={spot}
                        className="tree-spot"
                        style={{
                            top,
                            left,
                        }}
                        onClick={() => onSpotClick(spot)}
                    >
                        {placedToys[spot] && <span className="tree-toy">{placedToys[spot]}</span>}
                    </div>
                );
            })}
        </div>
    );
}

export default Tree;