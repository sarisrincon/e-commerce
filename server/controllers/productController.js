const { fetchItems, fetchItemDetails } = require('../services/meliService');

const getItems = async (req, res) => {
  try {
    const data = await fetchItems(req.query.q, req.query.offset);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching items" });
  }
};

const getItemById = async (req, res) => {
  try {
    const data = await fetchItemDetails(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching item detail" });
  }
};

module.exports = { getItems, getItemById };
