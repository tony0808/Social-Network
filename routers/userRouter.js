const express = require('express')
const router = express.Router();
const { userAuth } = require('../middleware/authentication');
const userController = require('../controllers/userController');
const postRouter = require('./postRouter');

// homepage route
router.get('/', userAuth, userController.get_user_homepage);

// post routes
router.use('/post', userAuth, postRouter);

module.exports = router;