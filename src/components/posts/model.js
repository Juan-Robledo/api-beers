const mongoose = require("mongoose");

const Beer = mongoose.model(
    'Beer',
    {
        id: Number,
        title: String,
        description: String,
        origen: String,
        color: String,
        alcohol: String,
        tipe: String,
        maridaje: String,
        uri_img: String
    }
);

module.exports = Beer;