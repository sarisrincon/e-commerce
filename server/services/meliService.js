const axios = require('axios');

const formatPrice = (price) => {
  return {
    amount: Math.floor(price),
    decimals: Number((price % 1).toFixed(2)),
  };
};


const fetchItems = async (query, offset = 0) => {
  const { data } = await axios.get('https://api.mercadolibre.com/sites/MLA/search', {
    params: { q: query, offset },
  });

  const categories = data.filters?.[0]?.values?.[0]?.path_from_root?.map(cat => cat.name) || [];

  const items = data.results.map(item => {
    const price = formatPrice(item.price);
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: price.amount,
        decimals: price.decimals,
        regular_amount: item.original_price || null,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      installments: item.installments?.quantity
        ? `${item.installments.quantity} cuotas`
        : null,
    };
  });

  return { categories, items };
};


const fetchItemDetails = async (id) => {
  const [itemRes, descRes] = await Promise.all([
    axios.get(`https://api.mercadolibre.com/items/${id}`),
    axios.get(`https://api.mercadolibre.com/items/${id}/description`)
  ]);

  const item = itemRes.data;
  const description = descRes.data.plain_text;

  const categoryRes = await axios.get(`https://api.mercadolibre.com/categories/${item.category_id}`);
  const category_path_from_root = categoryRes.data.path_from_root.map(cat => cat.name);

  const price = formatPrice(item.price);

  return {
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: price.amount,
        decimals: price.decimals,
        regular_amount: item.original_price || null,
      },
      pictures: item.pictures.map(pic => pic.secure_url),
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      installments: item.installments?.quantity
        ? `${item.installments.quantity} cuotas`
        : null,
      description,
      attributes: item.attributes.map(attr => ({
        id: attr.id,
        name: attr.name,
        value_name: attr.value_name
      })),
      category_path_from_root,
    }
  };
};

module.exports = { fetchItems, fetchItemDetails };
