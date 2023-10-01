const express = require('express');
const authRouter = express.Router();
const {userRegistration, userLogin, refreshToken, logOut} = require('../controllers/authController')

authRouter.post('/register', userRegistration);
authRouter.post('/login', userLogin);
authRouter.get('/refresh',refreshToken );
authRouter.get('/logout',logOut );



module.exports = authRouter;