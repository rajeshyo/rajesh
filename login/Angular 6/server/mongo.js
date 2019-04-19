const mongoes= require("mongoose");
// require("dotenv").config();
// const mongoDBErrors = require("mongoose-mongodb-errors");
// mongoes.Promise = global.Promise;
// mongoes.plugin(mongoDBErrors);
// mongoes.connect("mongodb://nodejsuser:nodejspassword1@ds123151.mlab.com:23151/nodejs-tuts")

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// Connect Databse (mongodb mlab)
const connection = (closure) => {
  return MongoClient.connect('mongodb://nodejsuser:nodejspassword1@ds123151.mlab.com:23151/nodejs-tuts', (err, db) => {
      if (err) return console.log(err);

      closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};
