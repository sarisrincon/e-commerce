import React from 'react';
import './product-information.scss';

const ProductInformation = ({ product }) => {
    return (
        <div className="product-information">
            <p className="product-information__condition">
                {product.condition} | {product.sold_quantity} vendidos
            </p>
            <div className="product-information__heading">
                <h1 className="product-information__title">{product.title}</h1>
                <p className="product-information__category">{product.category}</p>
            </div>
            <div className="product-information__price">
                <p className="product-information__price-amount">
                    ${product.price.amount.toLocaleString()}
                </p>
                {product.installments && (
                    <p className="product-information__installments">{product.installments}</p>
                )}
            </div>
            {product.free_shipping && (
                <p className="product-information__shipping">Envío gratis</p>
            )}
            <div className="product-information__attributes">
                {product.attributes?.map((attr) => (
                    <p key={attr.id}>
                        <span className="product-information__attr-name">{attr.name}:</span>{' '}
                        <span className="product-information__attr-value">{attr.value_name}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ProductInformation;
