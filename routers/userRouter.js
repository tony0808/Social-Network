const express = require('express')
const router = express.Router();
const { userAuth } = require('../middleware/authentication');
const userController = require('../controllers/userController');


router.get('/', userAuth, userController.get_user_homepage);

module.exports = router;