const axios = require('axios');
const mockData = require('../data/mock.json');
const getRandomMock = () => {
  const index = Math.floor(Math.random() * mockData.length);
  return mockData[index];
};

const formatPrice = (price) => {
  return {
    amount: Math.floor(price),
    decimals: Number((price % 1).toFixed(2)),
  };
};


const fetchItems = async (query, offset = 0) => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const paginated = filtered.slice(Number(offset), Number(offset) + 10);
  const items = paginated.map(item => {
    const mock = getRandomMock();
    const price = formatPrice(item.price);

    return {
      id: item.id,
      title: item.title,
      price: {
        currency: mock.currency,
        amount: price.amount,
        decimals: mock.decimals,
        regular_amount: mock.regular_amount
      },
      picture: item.image,
      condition: mock.condition,
      category: item.category,
      free_shipping: mock.free_shipping,
      installments: mock.installments
    };
  });

  return { items };
};


const fetchItemDetails = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const mock = getRandomMock();
  const price = formatPrice(data.price);

  return {
    item: {
      id: data.id,
      title: data.title,
      category: data.category,
      price: {
        currency: mock.currency,
        amount: price.amount,
        decimals: mock.decimals,
        regular_amount: mock.regular_amount
      },
      pictures: [data.image],
      condition: mock.condition,
      free_shipping: mock.free_shipping,
      sold_quantity: mock.sold_quantity,
      installments: mock.installments,
      description: data.description,
      attributes: mock.attributes,
      category_path_from_root: mock.category_path_from_root
    }
  };
};

module.exports = { fetchItems, fetchItemDetails };
