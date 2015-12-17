var mongoose = require('mongoose');

var db = mongoose.connection;

var env = require('./environment');

var dbUri = 'mongodb://localhost/dapper_dude_co';            // process.env.MONGOLAB_URI  ||

// connect to db
mongoose.connect(dbUri);


// export the connection
module.exports = mongoose;
