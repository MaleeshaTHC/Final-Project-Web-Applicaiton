const express = require('express')
const { newOrder, getSingleOrder, myOrders } = require('../controllers/orderController')
const router = express.Router()

const {isAuthenticateUser, authorizedRoles} = require('../middleware/auth')

router.route('/order/new').post(isAuthenticateUser, newOrder)

router.route('/order/:id').get(isAuthenticateUser, authorizedRoles('admin'), getSingleOrder)

router.route('/orders/me').get(isAuthenticateUser, myOrders)

module.exports = router