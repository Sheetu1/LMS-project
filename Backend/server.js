const app = require('./src/app');
const config = require('./src/config/config');
require('dotenv').config();
require('./src/db/db');


app.listen(config.PORT,()=>{
    console.log(`App is running on ${config.PORT} port`);
})