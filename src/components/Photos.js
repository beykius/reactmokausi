import React from 'react';

const Photos = ({photo}) => {
    return (
        <div>
            <div className="row"><img src={photo.thumbnailUrl} alt={photo.title}/></div>
        </div>
    );
};

export default Photos;