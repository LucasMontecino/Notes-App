const mongoose = require('mongoose');
const {MONGODB_URI} = process.env;

const URI = MONGODB_URI 
? MONGODB_URI 
: 'mongodb://localhost/databasetest';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});
