const mongoose = require("mongoose");
require('dotenv').config();

function connect(){
    const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apibeer.u8ldi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    mongoose.connect(dbURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = connect;