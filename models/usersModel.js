const { Schema, default: mongoose } = require("mongoose");


const usersSchema = new Schema({
    name: String,
    class: String,
    section: String,
    address: String,
    Email: String,
});

const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;