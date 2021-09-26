const mongoose = require("mongoose");

const Post = mongoose.model(
    'Post',
    {
        id: Number,
        title: String,
        description: String,
        origen: String,
        color: String,
        alcohol: String,
        maridaje: String
    }
);

module.exports = Post;