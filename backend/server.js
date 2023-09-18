require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const credentials = require('./middlewares/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconnect');
const authRouter = require('./routes/auth_route')

const PORT =  process.env.PORT || 3500;
const app = express();


// connect db
connectDB()

// middlewares
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.send('welcome to Backend API Service')
});

app.use(authRouter)

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('connected to MONGO_DB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })    
});

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })





