import axios from 'axios';

/**
 * Fetches product list from backend
 * @param {string} query - Search term
 * @returns {Promise<object>} - API response
 */
export const fetchProducts = async (query, offset = 0) => {
  const res = await axios.get(`/api/items?q=${query}&offset=${offset}`);
  return res.data;
};
/**
 * Fetches product detail from backend
 * @param {string} id - Product ID
 * @returns {Promise<object>} - API response
 */
export const fetchProductDetail = async (id) => {
  const res = await axios.get(`/api/items/${id}`);
  return res.data;
};
