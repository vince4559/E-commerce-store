const express = require('express');
const authRouter = express.Router();
const {userRegistration} = require('../controllers/authController')

authRouter.post('/signup', userRegistration);


module.exports = authRouter;