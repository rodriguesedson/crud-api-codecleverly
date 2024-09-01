const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const {getProducts} = require('../controllers/product.controller.js');

router.get('/', getProducts);

module.exports = router;