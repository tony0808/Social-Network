const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, `${process.env.USER_SECRET}`, { expiresIn: maxAge });
}

const get_index_page = (req, res) => {
    res.render('index/index', { title: 'index' });
};

const get_login_page = (req, res) => {
    res.render('index/login', { title: 'login' });
};

const get_register_page = (req, res) => {
    res.render('index/register', { title: 'register' });
}

const register_user = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ err_msg: "Email is already used." });
            return;
        }
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({ id: newUser._id });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err_msg: "Server error while registering user" });
    }
};

const login_user = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ err_msg: "Email does not belong to any user." });
            return;
        }
        const auth = await bcrypt.compare(req.body.password, user.password);
        if (!auth) {
            res.status(400).json({ err_msg: "Wrong password." });
            return;
        }
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ id: user._id });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err_msg: "Server error while logging user" });
    }
};

const logout_user = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};

module.exports = {
    get_index_page,
    get_login_page,
    get_register_page,
    register_user,
    login_user,
    logout_user
};