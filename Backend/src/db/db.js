const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.MONGO_URL)

.then(() => {
    console.log('db connected');
})

.catch((err) => {
    console.log(err);
})