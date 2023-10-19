const express = require('express');
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const productRouter = express.Router();
const Role_List = require('../config/roles_lists');
const VerifyRoles = require('../middlewares/verifyRoles');
// const verifyJWT = require('../middlewares/verifyJWT');

productRouter.post('/addproduct', addProduct); //verifyJWT, VerifyRoles(Role_List.Admin)
productRouter.get('/products', getAllProducts);
productRouter.get('/product/:id', getProductById);
productRouter.put('/updateproduct/:id',VerifyRoles(Role_List.Admin), updateProduct);
productRouter.delete('/deleteproduct/:id',VerifyRoles(Role_List.Admin), deleteProduct);


module.exports = productRouter;