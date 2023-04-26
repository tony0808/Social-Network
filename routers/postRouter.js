const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/list', postController.get_posts_list_page);
router.get('/new', postController.get_create_post_page);
router.post('/new', postController.create_post);
router.get('/:id', postController.get_post_page);
router.delete('/:id', postController.delete_post);
router.get('/other/:id', postController.get_post_other_page);
router.post('/like/:id', postController.like_post);

module.exports = router;