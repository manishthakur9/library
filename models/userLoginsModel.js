const { Schema, default: mongoose } = require("mongoose");


const userLoginsSchema = new Schema ({
    username : String,
    password  : String,
});

const userLoginsModel = mongoose.model("userLogins" , userLoginsSchema);

module.exports = userLoginsModel;