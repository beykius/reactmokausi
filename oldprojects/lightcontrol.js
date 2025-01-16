import React from "react";

function LightControl({ lightColor, setLightColor }) {
    return (
        <div className="light-control">
            <h2>Choose Light Color</h2>
            <button onClick={() => setLightColor("red")}>Red</button>
            <button onClick={() => setLightColor("white")}>White</button>
            <button onClick={() => setLightColor("blue")}>Blue</button>
            <button onClick={() => setLightColor("yellow")}>Yellow</button>
        </div>
    );
}

export default LightControl;