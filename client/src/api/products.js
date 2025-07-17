import axios from 'axios';

/**
 * Fetches product list from backend
 * @param {string} query - Search term  //ESTO ERREGLARLO
 * @returns {Promise<object>} - API response
 */
export const fetchProducts = async (query, offset = 0) => {
  const res = await axios.get(`/api/items?q=${query}&offset=${offset}`);
  return res.data;
};
//AÑADIR DESCRIPCION ACA
export const fetchProductDetail = async (id) => {
  const res = await fetch(`/api/items/${id}`);
  return res.json();
};
