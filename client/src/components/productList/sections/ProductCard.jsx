import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './product-card.scss';

const ProductCard = ({ item, query }) => {
  const {
    id,
    title,
    picture,
    price,
    free_shipping,
    installments,
    category,
    condition
  } = item;

  const discount =
    price.regular_amount && price.regular_amount > price.amount
      ? Math.round(((price.regular_amount - price.amount) / price.regular_amount) * 100)
      : null;
  return (
    <li className="product-card">
      <Link to={`/items/${id}`} state={{ fromQuery: query }} className="product-card__link">
        <img src={picture} alt={`Imagen del producto ${title}`} className="product-card__image" />
        <div className="product-card__info">
          <div className="product-card__heading">
          <h2 className="product-card__title">{title}</h2>
          <p className="product-card__category">{category}</p>
          </div>
          <div className="product-card__price-block">
            {price.regular_amount && price.regular_amount > price.amount && (
              <p className="product-card__regular-price">
                ${price.regular_amount.toLocaleString()}
              </p>
            )}
            <p className="product-card__price">
              ${price.amount.toLocaleString()}
              {discount && (
                <span className="product-card__discount"> {discount}% OFF</span>
              )}
            </p>
            {installments && (
              <p className="product-card__installments">{installments}</p>
            )}
          </div>
          {free_shipping && (
            <span className="product-card__shipping">Envío gratis</span>
          )}
          {condition && (
            <span className="product-card__condition">{condition}</span>
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