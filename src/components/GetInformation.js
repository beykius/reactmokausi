import React, {useRef, useState} from 'react';

const GetInformation= ({ colorList, setColorList }) => {


    const colorRef = useRef();
    const colorNameRef = useRef();

    function addInformation() {
        const newColor = {
            code: colorRef.current.value,
            name: colorNameRef.current.value,
        };
        setColorList([...colorList, newColor]);
        colorRef.current.value = '';
        colorNameRef.current.value = '';

    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Color" ref={colorRef}/>
                <input type="text" placeholder="Color name" ref={colorNameRef}/>
                <button type='submit' onClick={addInformation}>Submit</button>
            </div>
        </div>
    );
};

export default GetInformation;