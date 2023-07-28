const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './config.env') });

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const app = require('./app');
const http = require('http');
const config = require('./config');
const port = config.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (err) => {
    console.log(`Error connecting to database: ${err}`);
});

database.once('connected', () => {
    console.log('Connected to database');
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;