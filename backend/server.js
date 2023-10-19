require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const credentials = require('./middlewares/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconnect');
const authRouter = require('./routes/auth_route');
const verifyJWT = require('./middlewares/verifyJwt');
const userRouter = require('./routes/user_routes');
const productRouter = require('./routes/product_route');
const cartRouter = require('./routes/cart_route');
const stripeRouter = require('./routes/stripe_route');

const PORT =  process.env.PORT || 3500;
const app = express();


// connect db
connectDB()

// middlewares

// handle options credentail check before cors and fetch cookies credentials requirement
app.use(credentials);
//handling cors
app.use(cors(corsOptions));

//handling form data
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.send('welcome to Backend E-commerce service API Service')
});

app.use(authRouter);
app.use(productRouter)
app.use(cartRouter)
app.use(stripeRouter)


app.use(verifyJWT);
app.use(userRouter);

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('connected to MONGO_DB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })    
});







