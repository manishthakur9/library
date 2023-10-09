const booksModel = require("../models/booksModel");

const booksController = require("express").Router();

booksController.get("/", (req, res) => {
    booksModel.find().then((result)=>{
        return res.status(200).json({
            data: result

        });

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });

});


booksController.get("/:id", (req, res) => {
    let {id} = req.params;
    booksModel.findById(id).then((result)=>{
        return res.status(200).json({
            data: result

        }); 

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });

});


booksController.post("/", (req, res)=>{
    let body = req.body;
    
    let books = new booksModel(body);
    books.save().then((result)=>{
        return res.status(201).json({
            insertedId: result._id,
            message: "New book has been adedd."

        });

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });

});



booksController.put("/:id", (req, res)=>{
    let {id} = req.params;
    let body = req.body;
    
    booksModel.findByIdAndUpdate(id, body).then((result)=>{
        return res.status(200).json({
            affectedId: result._id,
            message: "The book has been updated."

        });

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });

});


booksController.patch("/:id/name", (req, res)=>{
    let {id} = req.params;
    let {name} = req.body;
    
    booksModel.findByIdAndUpdate(id, {name: name}).then((result)=>{
        return res.status(200).json({
            affectedId: result._id,
            message: "The books name has been updated."

        });

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });

});


booksController.patch("/:id/author", (req, res)=>{
    let {id} = req.params;
    let {author} = req.body;
    
    booksModel.findByIdAndUpdate(id, {author: author}).then((result)=>{
        return res.status(200).json({
            affectedId: result._id,
            message: "The books author has been updated."

        });

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });

});


booksController.delete("/:id", (req, res)=>{
    let {id} = req.params;
    
    booksModel.findByIdAndDelete(id).then((result)=>{
        return res.status(200).json({
            deletedId: result._id,
            message: "The books has been deleted."

        });

    }).catch((err)=>{
        return res.status(400).json({
            error: err

        });

    });
    
});

module.exports = booksController;