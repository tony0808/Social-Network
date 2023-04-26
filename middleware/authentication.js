const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const userAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        res.redirect('/login');
        return;
    }
    jwt.verify(token, `${process.env.USER_SECRET}`, (err, decodedToken) => {
        if (err) {
            console.log(err);
            res.redirect('/login');
        }
        else {
            console.log(decodedToken);
            next();
        }
    });
}

const checkUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.locals.user = null;
        next();
        return;
    }
    jwt.verify(token, `${process.env.USER_SECRET}`, async (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            res.locals.user = null;
            next();
        }
        else {
            let user = await User.findById(decodedToken.id);
            res.locals.user = user;
            next();
        }
    });
}

module.exports = {
    userAuth,
    checkUser
};