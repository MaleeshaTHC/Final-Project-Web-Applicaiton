const express = require('express')
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require('../controllers/orderController')
const router = express.Router()

const {isAuthenticateUser, authorizedRoles} = require('../middleware/auth')

router.route('/order/new').post(isAuthenticateUser, newOrder)

router.route('/order/:id').get(isAuthenticateUser, authorizedRoles('admin'), getSingleOrder)

router.route('/orders/me').get(isAuthenticateUser, myOrders)

router.route('/admin/orders').get(isAuthenticateUser, authorizedRoles('admin'), getAllOrders)

router.route('/admin/orders/:id')
    .put(isAuthenticateUser, authorizedRoles('admin'), updateOrder)
    .delete(isAuthenticateUser, authorizedRoles('admin'), deleteOrder)

module.exports = router