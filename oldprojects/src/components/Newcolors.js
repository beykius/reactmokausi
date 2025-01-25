import React from 'react';

const Newcolors = (props) => {

    const handleClick = () => {
        props.update(props.color); // Call the updateColor function with the selected color
    };

    return (
        <div className='box'>
            <div className="title text-uppercase fw-bold" style={{backgroundColor: `#${props.color}`, padding: '20px'}} onClick={handleClick}>
                Color: #{props.color} {/* Displaying the color code for easier debugging */}
            </div>
        </div>
    );
};

export default Newcolors;