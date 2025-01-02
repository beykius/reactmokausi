import React from "react";
import "./toys.css";

const toyImages = ["🧸", "🎀", "⚜️", '💍', '👑', '🔑', '🔔'];

function Toys({ onToyClick }) {
    return (
        <div className="toys">
            <h2>Pick a Toy</h2>
            <div className="toy-list">
                {toyImages.map((toy) => (
                    <div
                        key={toy}
                        className="toy"
                        onClick={() => onToyClick(toy)}
                    >
                        {toy}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Toys;