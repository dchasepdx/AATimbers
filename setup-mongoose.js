const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/AATimbers';

mongoose.Promise = Promise;
mongoose.connecct(dbURI);

//connection events
//success
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

//error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

//disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

//if node process ends, close connection
process.on('SIGINT', function () {
  mongoose.connecction.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;