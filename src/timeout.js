import React, { useState, useEffect } from 'react';

const TimeoutClock = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            setMessage('Delayed message after 2 seconds!');
        }, 2000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default TimeoutClock;