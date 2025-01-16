import React, {useEffect, useState} from 'react';


const Gallery = () => {

    const [ getPhotos, setPhotos] = useState([]);
  useEffect( () => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {setPhotos(data);})
  }, [])

    return (
        <div className="gallery">
            {getPhotos.slice(0, 10).map((src, index) => (
                <img key={index} src={src.images[0]} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
};

export default Gallery;