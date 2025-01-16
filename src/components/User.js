import React from 'react';

const User = (props) => {
    return (
        <div className="box" style={{backgroundColor: props.bgColor}}>
            <div><img src={props.image}/></div>
            <div>{props.email}</div>
            <div>{props.firstName} {props.lastName}</div>
            <div>Age: {props.age}</div>
            <div>From {props.city}, {props.country}</div>

        </div>
    );
};

export default User;