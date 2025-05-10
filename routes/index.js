const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Home page route
router.get('/', passwordController.getHomePage);

module.exports = router;
