const allowedOrigins = require('./allowedOrigins');

// implimenting the allowed origin

const corsOptions = {
    origin:(origin, callback) => {
        if(allowedOrigins.indexOf(origin) !==-1 || !origin){  //
            callback(null, true)
        }else{
            callback(new Error('Not allowed by cors'))
        }
    },
    optionSuccessStatus:200,
};

module.exports = corsOptions;