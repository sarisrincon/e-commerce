import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../../api/products';
import ProductCard from './ProductCard';
import SearchBar from '../../shared/components/SearchBar';
import './list-product.scss';

const ListProduct = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const [productsCache, setProductsCache] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetch = async () => {
      if (!query || productsCache[query]) return;

      try {
        setLoading(true);
        const data = await fetchProducts(query);
        setProductsCache((prev) => ({
          ...prev,
          [query]: data.items,
        }));
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetch();
    setCurrentPage(1);
  }, [productsCache, query]);

  const allItems = productsCache[query] || [];

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const paginatedItems = allItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="products-page">
      <SearchBar />

      <div className="products">
        {loading && <p className="products__loading">Cargando productos...</p>}
        {error && <p className="products__error">{error}</p>}

        <ul className="products__list">
          {paginatedItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? 'pagination__button active' : 'pagination__button'}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
