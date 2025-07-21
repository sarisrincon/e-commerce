import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const useProductSearch = (query) => {
  const [productsCache, setProductsCache] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [query, productsCache]);

  return {
    products: productsCache[query] || [],
    loading,
    error,
    setProductsCache,
  };
};

export default useProductSearch;
