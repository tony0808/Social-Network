const Post = require('../models/post');

const get_user_homepage = async (req, res) => {
    const latest_posts = await Post.find({ user: { $ne: res.locals.user._id } }).populate('user', 'fname lname');
    res.render('user/home', { title: 'homepage', latest_posts });
};

const get_create_post_page = (req, res) => {
    res.render('post/create');
};

module.exports = {
    get_user_homepage,
    get_create_post_page
};