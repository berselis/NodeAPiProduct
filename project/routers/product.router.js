const router = require('express').Router();
const productService = require('../services/product.services');

router.post('/products', productService.postProduct);
router.get('/products', productService.getProductAll);
router.get('/products/:id', productService.getProductById);
router.patch('/products/:id', productService.pacthProduct);
router.delete('/products/:id', productService.deleteProduct);

module.exports = router;
