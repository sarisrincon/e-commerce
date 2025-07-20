import React from 'react';
import './product-detail-header.scss';
import { Link } from 'react-router-dom';

const ProductDetailHeader = ({ categoryPath, productId, fromQuery }) => {
    return (
        <div className="product-detail-header">
            <div className="product-detail-header__left-inline">
                <Link to={`/items?search=${fromQuery || ''}`} className="product-detail-header__back-link">
                    Volver al listado
                </Link>
                <span className="product-detail-header__separator">|</span>
                {Array.isArray(categoryPath) && (
                    <nav className="product-detail-header__breadcrumb">
                        {categoryPath.map((cat, index, arr) => (
                            <span key={index}>
                                {cat}
                                {index < arr.length - 1 && ' > '}
                            </span>
                        ))}
                    </nav>
                )}
            </div>
            <div className="product-detail-header__right">
                <span className="product-id__label">Publicación:</span>
                <span className="product-id__number">#{productId}</span>
            </div>

        </div>
    );
};

export default ProductDetailHeader;
