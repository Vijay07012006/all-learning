const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller')

//User auth API's
router.post('/user/register' , authController.registerUser);
router.post('/user/login' , authController.loginUser);
router.get('/user/logout' , authController.logoutUser);
  
// Food Partner auth API's
router.post('/food-partner/register' , authController.registerFoodPartner);
router.post('/food-partner/login' , authController.loginFoodPartner);
router.post('/food-partner/logout' , authController.logoutFoodPatner);



module.exports = router;
  