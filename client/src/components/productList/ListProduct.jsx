import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import SearchBar from '../../shared/components/searchBar/SearchBar';
import useProductSearch from '../../hooks/useProductSearch';
import './list-product.scss';
import Pagination from '../../shared/components/pagination/Pagination';

const ListProduct = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const { products, loading, error } = useProductSearch(query);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedItems = products.slice(
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
            <ProductCard key={item.id} item={item} query={query} />
          ))}
        </ul>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ListProduct;
