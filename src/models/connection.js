const { MongoClient } = require('mongodb');
require('dotenv').config();

const connection = new MongoClient(process.env.MONGO_DB_URI)

module.exports = connection

