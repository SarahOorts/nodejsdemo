const mongoose = require("mongoose");
const Schema = mongoose.Schema; //spelregels
const messageSchema = new Schema({ //model maken opbasis van spelregels
    from : String,
    to : String,
    message : String,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

//model aan welke structuur de message moet voldoen