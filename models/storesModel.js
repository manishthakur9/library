const { Schema, default: mongoose } = require("mongoose");


const storesSchema = new Schema({
    blockid: Object,
    bookid: Object,
    Quantity: String,
    row: String,
    column: String,
});

const storesModel = mongoose.model("Stores", storesSchema);

module.exports = storesModel;