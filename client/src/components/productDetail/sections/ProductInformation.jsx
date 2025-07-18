import React from 'react';
import './product-information.scss';

const ProductInformation = ({ product }) => {
    return (
        <div className="product-information">
            <p className="product-information__condition">
                {product.condition} - {product.sold_quantity} vendidos
            </p>
            <h1 className="product-information__title">{product.title}</h1>
            <p className="product-information__price">
                ${product.price.amount.toLocaleString()}
            </p>
            {product.installments && (
                <p className="product-information__installments">{product.installments}</p>
            )}
            {product.free_shipping && (
                <p className="product-information__shipping">Envío gratis</p>
            )}
            <div className="product-information__attributes">
                {product.attributes?.map((attr) => (
                    <p key={attr.id}>
                        <strong>{attr.name}:</strong> {attr.value_name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ProductInformation;
