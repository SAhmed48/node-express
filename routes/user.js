const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/user', userController.userInsert);
router.get('/user/:id', userController.userFetch);

module.exports = router;