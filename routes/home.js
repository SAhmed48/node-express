const path = require('path');
const express = require('express');
const rootDir = require('../utils/dirPath');
const homeController = require('../controllers/home');

const router = express.Router();

router.get('/about-us', homeController.renderAboutUsHtml);
router.get('/', homeController.renderHomeHtml);

module.exports = router;