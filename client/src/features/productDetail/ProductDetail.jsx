import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../api/products';
import './product-detail.scss';
import SearchBar from '../../shared/components/SearchBar';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

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
    if (!product) return <p>Cargando producto...</p>;

    return (

        < div className="product-detail-page" >
            <SearchBar />    
            {
                product.category_path_from_root && (
                    <nav className="breadcrumb">
                        {product.category_path_from_root.map((cat, index, arr) => (// me quede en tratar de arreglar esto
                            <span key={cat.id}>
                                {cat.name}
                                {index < arr.length - 1 && ' > '}
                            </span>
                        ))}
                    </nav>
                )
            }
            <div className="product-detail">
                <div className="product-detail__image">
                    <img src={product.pictures?.[0]} alt={product.title} />
                </div>
                <div className="product-detail__info">
                    <p className="product-detail__condition">
                        {product.condition} - {product.sold_quantity} vendidos
                    </p>
                    <h1 className="product-detail__title">{product.title}</h1>
                    <p className="product-detail__price">
                        ${product.price.amount.toLocaleString()}
                    </p>
                    <button className="product-detail__buy">Comprar</button>
                </div>
                <div className="product-detail__description">
                    <h2>Descripción del producto</h2>
                    <p>{product.description}</p>
                </div>
            </div>
        </div >
    );
};

export default ProductDetail;
