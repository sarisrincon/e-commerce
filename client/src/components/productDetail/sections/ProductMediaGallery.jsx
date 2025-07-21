import React, { useState } from 'react';
import './product-media-gallery.scss';

const ProductMediaGallery = ({ picture, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnails = [...Array(5)].map(() => picture);

  return (
    <div className="product-media">
      <div className="product-media__thumbnails">
        {thumbnails.map((thumb, i) => (
          <img
            key={i}
            src={thumb}
            alt={`Vista ${i + 1} de ${title}`}
            className={`thumbnail ${selectedIndex === i ? 'active' : ''}`}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>
      <div className="product-media__image">
        <img src={thumbnails[selectedIndex]} alt={title} />
      </div>
    </div>
  );
};

export default ProductMediaGallery;
