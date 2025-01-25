import React from 'react';

const GottenInformation = ({colorList}) => {
    return (
        <div>
            {colorList.map((color, index) => (
                <div key={index} className="p-3 border d-flex">
                    <div className='me-4' style={{backgroundColor: `#${color.code}`, padding: '10px'}}></div>
                    <div className="mt-2 text-center">{color.name}</div>
                </div>
            ))}
        </div>
    );
};

export default GottenInformation;