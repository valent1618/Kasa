import { useState, useEffect } from 'react';

import { handleGallery, autoGallery } from '../../functions/gallery.js';

function Gallery({ pictures }) {
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    pictures.length > 1 && autoGallery(4000);
  }, [pictures]);

  if (pictures.length > 1) {
    return (
      <div className='gallery'>
        <div
          className='arrow-container left'
          onClick={() =>
            handleGallery(activeImg, setActiveImg, pictures.length, 'previous')
          }
        >
          <span className='arrow' />
        </div>
        <h4>
          {activeImg}/{pictures.length}
        </h4>
        <div
          className='arrow-container right'
          onClick={() =>
            handleGallery(activeImg, setActiveImg, pictures.length, 'next')
          }
        >
          <span className='arrow' />
        </div>
        {pictures.map((img, index) => (
          <img
            key={`picture-${index}`}
            src={img}
            alt={`Aperçu ${index + 1} du logement`}
            className={activeImg === index + 1 ? 'activeImg' : ''}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className='gallery'>
        <img
          src={pictures[0]}
          alt={`Aperçu du logement`}
          className='aloneImg'
        />
      </div>
    );
  }
}

export default Gallery;
