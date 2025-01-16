import React from 'react';

const Albums = ({album}) => {
    return (
        <div className='box'>
               <div className="posts">{album.title}</div>
        </div>
    );
};

export default Albums;