const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: "true",
            useUnifiedTopology: "true"
        })
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB