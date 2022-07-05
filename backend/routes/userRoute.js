const express = require('express')
const { registerUser, 
    loginUser, 
    logout, 
    forgotPassword, 
    resetpassword, 
    getUserDetails, 
    updatePassword, 
    updateProfile, 
    getAllUser, 
    getSingleUser, 
    updateUserRole, 
    deleteUser } = require('../controllers/userController')
const { isAuthenticateUser, authorizedRoles } = require('../middleware/auth');
const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/password/forgot').post(forgotPassword)

router.route('/password/reset/:token').put(resetpassword)

router.route('/logout').get(logout)

router.route('/me').get(isAuthenticateUser, getUserDetails)

router.route('/password/update').put(isAuthenticateUser, updatePassword)

router.route('/me/update').put(isAuthenticateUser, updateProfile)

router.route('/admin/user').get(isAuthenticateUser, authorizedRoles('admin'), getAllUser)

router.route('/admin/user/:id')
    .get(isAuthenticateUser, authorizedRoles('admin'), getSingleUser)
    .put(isAuthenticateUser, authorizedRoles('admin'), updateUserRole)
    .delete(isAuthenticateUser, authorizedRoles('admin'), deleteUser)

module.exports = router