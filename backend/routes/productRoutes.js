const express = require('express');
const { addProduct, removeProduct, getAllProducts, getWomenProducts, getMenProducts, getKidsProducts, getProductsByPriceRange, getProductsSortedByPrice } = require('../controllers/productController');

const router = express.Router();

router.post('/product/add', addProduct);
router.post('/product/remove', removeProduct);
router.get('/product/getall', getAllProducts);
router.get('/product/getwomen', getWomenProducts);
router.get('/product/getmen', getMenProducts);
router.get('/product/getkids', getKidsProducts);
router.get('/product/getbypricerange', getProductsByPriceRange);
router.get('/product/getsortedbyprice', getProductsSortedByPrice);

module.exports = router;