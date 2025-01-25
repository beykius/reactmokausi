import React from 'react';
import useStore from '../store/main';

const Comp2 = () => {
    const {updateColor, changeColor} = useStore((state) => state);

    function update() {
        updateColor('red')
    }
    return (
        <div>
            <button onClick={update}>Update</button>
            <button onClick={changeColor}>Update to default</button>
        </div>
    );
};

export default Comp2;