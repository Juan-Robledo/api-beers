const mongoose = require("mongoose");

function connect(){
    const dbURL = "mongodb+srv://beer123:iKbQMIRlYjxEiwIS@apibeer.u8ldi.mongodb.net/api?retryWrites=true&w=majority";
    mongoose.connect(dbURL);
}

module.exports = connect;