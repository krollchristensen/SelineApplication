const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Ruter til forskellige funktioner
router.get('/', mainController.getIndex);
router.get('/hello', mainController.getHello);
router.get('/data', mainController.getData);
router.post('/button-click', mainController.postButtonClick);
router.get('/read-file', mainController.getFile);

module.exports = router;
