import React, {useState} from 'react';


const Colors = () => {

    const newColors = ['#61dafb', 'red', 'blue'];

    const handleColorChange = (id, color) => {
        setBox((prevBoxes) =>
            prevBoxes.map((box) =>
                box.id === id ? { ...box, color } : box
            )
        );
    };

    const [getBox, setBox] = useState([]);
    function createBox(){
    setBox([...getBox, { id: getBox.length + 1 }]);
    }
    return (
        <div className="mb-5">
            <button className='mb-5' onClick={createBox}>add card</button>
<div className='d-flex'> {getBox.map((card) => (
    <div key={card.id} className="card p-3 me-2"  style={{ backgroundColor: card.color }}>
        Card {card.id}
        <select name='colors' className="mt-2" onChange={(e) => handleColorChange(card.id, e.target.value)}
                value={card.color}>
            {newColors.map((color, index) => (
                <option key={index} value={color}>
                    {color}
                </option>
            ))}
        </select>
    </div>
))}</div>
        </div>
    );
};

export default Colors;