const stripePayment = require("../controllers/stripeController");
const stripeRouter = require('express').Router();

stripeRouter.post('/payment', stripePayment)



module.exports = stripeRouter;