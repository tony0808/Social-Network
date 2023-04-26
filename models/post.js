const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    desc: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;