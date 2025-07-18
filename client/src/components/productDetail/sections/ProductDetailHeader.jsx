import React from 'react';
import './product-detail-header.scss';
import { Link } from 'react-router-dom';

const ProductDetailHeader = ({ categoryPath, productId, fromQuery }) => {
    return (
        <div className="product-detail-header">
            <div className="product-detail-header__left-inline">
                <Link to={`/api/items?search=${fromQuery || ''}`} className="back-link">
                    Volver al listado
                </Link>
                <span className="separator">|</span>
                {Array.isArray(categoryPath) && (
                    <nav className="breadcrumb">
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
                <span className="product-id">Publicación: #{productId}</span>
            </div>
        </div>
    );
};

export default ProductDetailHeader;
