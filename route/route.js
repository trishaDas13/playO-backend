const express = require('express');
const dataController = require('../controller/controller');
const route = express.Router();

route.post( '/', dataController.postFormData);
route.get('/',dataController.getAllData);
route.delete('/',dataController.deleteData);
route.patch('/', dataController.editData);

module.exports = route;