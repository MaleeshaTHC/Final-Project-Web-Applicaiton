const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const { isAuthenticateUser, authorizedRoles } = require('../middleware/auth');

const router = express.Router();

router.route('/products').get(getAllProducts)

router
    .route('/products/new')
    .post(isAuthenticateUser, authorizedRoles('admin'), createProduct)

router
    .route('/products/:id')
    .put(isAuthenticateUser, authorizedRoles('admin'), updateProduct)
    .delete(isAuthenticateUser, authorizedRoles('admin'), deleteProduct)
    .get(getProductDetails)

module.exports = router