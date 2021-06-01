const express = require('express');
const controller = require('../controller/userController');

const route = express.Router();

// URL: 
// DESC: Fetch all data
route.get('/', controller.getAll);

module.exports = route;