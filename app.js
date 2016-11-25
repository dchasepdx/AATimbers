const express = require('express');
const app = express();
const path = require('path');
const auth =  require('./routes/auth');
// const pubDir = path.join(__dirname, '../public'); 
const errorHandler = require('./error-handler');



module.exports = app;