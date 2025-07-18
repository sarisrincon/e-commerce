import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './list-product.scss';

const ProductCard = ({ item, query }) => {
  const {
    id,
    title,
    picture,
    price,
    free_shipping,
    installments,
    category
  } = item;

  return (
    <li className="product-card">
      <Link to={`/items/${id}`}   state={{ fromQuery: query }} className="product-card__link">
        <img src={picture} alt={`Imagen del producto ${title}`} className="product-card__image" />
        <div className="product-card__info">
          <h2 className="product-card__title">{title}</h2>
          <p className="product-card__category">{category}</p>
          <p className="product-card__price">
            ${price.amount.toLocaleString()} <span className="product-card__currency">{price.currency}</span>
          </p>
          {installments && (
            <p className="product-card__installments">{installments}</p>
          )}
          {free_shipping && (
            <span className="product-card__shipping">Envío gratis</span>
          )}
        </div>
      </Link>
    </li>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCard;