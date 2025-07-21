import React from 'react';
import './product-description.scss';

const ProductDescription = ({ description }) => {
  return (
    <div className="product-description">
      <h2>Descripción</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
