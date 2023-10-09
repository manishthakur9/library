const { Schema, default : mangoose} = require ("mangoose");

const bookAllocationsSchema = new Schema ({

    id : Object,
    studentid : Object,
    bookid : Object,
    blockid : Object,
    issuedfrom : Date,
    issuedtill : Date,
    issuedTime : Date,
    returnedTime : Date, 
});

const bookAllocationsModel = mongoose.model("BookAllocations", bookAllocationsSchema);

module.exports = bookAllocationsModel;