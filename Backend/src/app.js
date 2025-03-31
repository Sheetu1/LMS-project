const express = require('express');
const app = express();
const userRoutes = require('../src/routes/user.routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoutes);

module.exports = app;