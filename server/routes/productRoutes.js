const express = require('express');
const router = express.Router();
const { getItems, getItemById } = require('../controllers/productController');

router.get('/items', getItems);
router.get('/items/:id', getItemById);

module.exports = router;
