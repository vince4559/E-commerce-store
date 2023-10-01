const express = require('express');
const { createCart, getAllCarts, getCartById, updateCart, deleteCart } = require('../controllers/cartController');
const cartRouter = express.Router();
// const verifyJWT = require('../middlewares/VerifyJwt');
// const VerifyRoles = require('../middlewares/verifyRoles');
// const Role_List = require('../config/roles_lists') 


cartRouter.post('/newcart', createCart);
cartRouter.get('/carts', getAllCarts);
cartRouter.get('/cart/:id', getCartById);
cartRouter.put('/updatecart/:id', updateCart);
cartRouter.delete('/delatecart/:id', deleteCart);

module.exports = cartRouter;