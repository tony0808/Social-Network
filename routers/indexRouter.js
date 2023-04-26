const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.get_index_page);
router.get('/login', indexController.get_login_page);
router.post('/login', indexController.login_user);
router.get('/register', indexController.get_register_page);
router.post('/register', indexController.register_user);
router.get('/logout', indexController.logout_user);

module.exports = router;