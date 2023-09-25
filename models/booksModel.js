const { Schema, default: mongoose } = require("mongoose");


const booksSchema = new Schema({
    name: String,
    author: String,
    description: String,
    price: Number
});

const booksModel = mongoose.model("Books", booksSchema);

module.exports = booksModel;