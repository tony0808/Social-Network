const Post = require('../models/post');

const get_posts_list_page = async (req, res) => {
    const posts = await Post.find({ user: res.locals.user._id });
    res.render('posts/list', { title: 'Posts list', posts });
};

const get_create_post_page = (req, res) => {
    res.render('posts/create', { title: 'Create post' });
};

const get_post_page = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('posts/viewOwn', { title: 'View post', post });
};

const get_post_other_page = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }).populate('user', 'fname lname');
    res.render('posts/viewOther', { title: 'View post', post });
};

const create_post = async (req, res) => {
    try {
        req.body.user = res.locals.user._id;
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(200).json({ id: newPost._id });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err_msg: "Server error while trying to create a new post." });
    }
};

const delete_post = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: post._id });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err_msg: "Server error while trying to delete post." });
    }
};

module.exports = {
    get_posts_list_page,
    get_create_post_page,
    get_post_other_page,
    get_post_page,
    create_post,
    delete_post,
};