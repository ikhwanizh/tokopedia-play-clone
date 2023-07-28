const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//TODO: Setup middleware
app.use(bodyParser.json());

//TODO: Setup Routes
const apiRoutes = express.Router();
app.use('/api', apiRoutes);

//TODO: setup customer routes
// const customerRoutes = require('./routes/customerRoutes');
// apiRoutes.use('/customers',customerRoutes);

module.exports = app;