
require('dotenv').config();
const _config = {
    PORT : process.env.PORT,
    MONGO_URL :  process.env.MONGO_URL,
    SECRET_KEY : process.env.SECRET_KEY
}

const config = Object.freeze(_config);
module.exports = config;