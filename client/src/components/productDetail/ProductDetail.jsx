import React, { useEffect, useState } from 'react';
import { fetchProductDetail } from '../../api/products';
import './product-detail.scss';
import SearchBar from '../../shared/components/searchBar/SearchBar';
import ProductDetailHeader from './sections/ProductDetailHeader';
import ProductMediaGallery from './sections/ProductMediaGallery';
import { useLocation, useParams } from 'react-router-dom';
import ProductInformation from './sections/ProductInformation';
import ProductDescription from './sections/ProductDescription';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const fromQuery = location.state?.fromQuery;

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const data = await fetchProductDetail(id);
                console.log(data.item);
                setProduct(data.item);
            } catch (err) {
                console.error(err);
                setError('No se pudo cargar el producto.');
            }
        };

        fetchDetail();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!product) return <div className="products__skeleton">
        {[...Array(8)].map((_, index) => (
            <div key={index} className="skeleton-card" />
        ))}
    </div>;

    return (
        <div className="product-detail">
            <SearchBar />
            <div className="product-detail__card">
                <ProductDetailHeader
                    categoryPath={product.category_path_from_root}
                    productId={product.id}
                    fromQuery={fromQuery}
                />
                <div className="product-detail__information">
                    <ProductMediaGallery
                        picture={product.pictures?.[0]}
                        title={product.title}
                    />
                    <ProductInformation product={product} />
                </div>
            </div>
            <ProductDescription description={product.description} />
        </div>
    );

};

export default ProductDetail;


