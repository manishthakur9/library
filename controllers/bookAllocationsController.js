const { model } = require("mongoose");
const bookAllocationsModel = require("../mdels/bookAllocationsModel1");
const bookAllocationsController = require("../mdels/bookAllocationsModel1");

const bookAllocationsController = require("express").Router();

bookAllocationsController.get("/",(req , res)=>{
    bookAllocationsModel.find().then((result) =>{
        return res.status(200).json({
            data : result

        });

    }).catch((err) =>{
        return res.status(400).json({
            error : err
        });

    });

});

let{id} = req.params;
bookAllocationsModel.findById().then((result) =>{
    return res.status(200).json({
        data : result

    });

}).catch((err) =>{
    return res.status(400).json({
        error : err

    });

});

bookAllocationsController.get("/id", (req , res) =>{
    let{id}= req.params;
    bookAllocationsModel.findById(id).then((result) =>{
        return res.status(200).json({
            data : result 

        });

    }).catch((err) =>{
        return res.status(400).json({
            error : err 
        });

    });

});


    bookAllocationsController.post("/", (req , res) =>{        
        let body = req.body;

        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " BookAllocation has been added"

            });

            }).catch((err) =>{
                return res.status(400).json({
                    error : err
                });

            });

        });


    bookAllocationsController.post("/id",(req , res) =>{
        let body = req.body;

        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " Id has been added "

            });

        }).catch((err) =>{
            return res.status(400).json({
                error : error

            });

        });

    });

    bookAllocationsController.post("/studentid", (req , res) =>{
        let body = req.body;

        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " StudentId has been added "

            });

        }).catch((err) =>{
            return res.status(400).json({
                error : err
            });

        });

    });

    bookAllocationsController.post("/bookid", (req , res) =>{
        let body = req.body;

        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " Bookid has been added"

            });

        }).catch((err) =>{
            return res.status(400).json({
                error : err

            });

        });

    });

    bookAllocationsController.post("/blockid", (req , res) =>{
        let body = req.body;

        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " Blockid has been added"

            });

        }).catch((err) =>{
            return res.status(400).json({
                error : err

            });

        });

    });

    bookAllocationsController.post("/issuedfrom", (req , res) =>{
        let body = req.body;
        body.issuedTime = new Date();
        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " Book issued time has been added"

            });

        }).catch((err) =>{
            return res.status(400).json({
                error : err
            });

        });

    });    


    bookAllocationsController.post("/issuedtill", (req , res) =>{
        let body = req.body;
        body.returnedTime = new Date();
        let bookAllocations = new bookAllocationsModel1(body);
        bookAllocations.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message : " Returned Time has been added "

            });

        }).catch((err) =>{
            return res.status(400).json({
                error : err
            });

        }); 

    });


    

module.exports = bookAllocationController;