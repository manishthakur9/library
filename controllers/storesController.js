const storesModel = require("../models/storesModel");
const storesController = require("../models/storesModel");

const storesController = require("express").Router();

storesController.get("/", (req , res) =>{
    storesModel.find().then((result) =>{
        return res.status(200).json({
            data : result

        });

    }).catct((err) =>{
        return res.status(400).json({
            error : err
        });

    });

});


let {id} = req.params;
storesModel.findById(id).then((result)=>{
    return res.status(200).json({
        data: result
    }); 
}).catch((err)=>{
    return res.status(400).json({
        error: err
    });

});


storesController.get("/:id", (req, res) => {
    let {id} = req.params;
    storesModel.findById(id).then((result)=>{
        return res.status(200).json({
            data: result
        }); 
    }).catch((err)=>{
        return res.status(400).json({
            error: err
        });

    });

});

    storesController.post("/:", (req, res) => {
        let body = req.body;

        let stores = new storesModel1(body);
        stores.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message: " New store has been added."

            });
        }).catch((err) =>{
            return res.status(400).json({
                error: err
            });

        });

    });


    storesController.post("/blockid",(req , res)=> {
        let body = req.body;

        let stores =new storesModel1(body);
        stores.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message: " Blockid has been added"
            });
        }).catch((err) =>{
            return res.status(400).json({
                error : err
            });

        });

    });

    storesController.post("/:bookid",( req, res) =>{
            let body = req.body;

            let stores =new storesModel1(body);
            stores.save().then((result) =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message: "Bookid has been added"

                });

            }).catch((err) =>{
                return res.status(400).json({
                    error:err
                });

            });

        });

        storesController.post("/:quantity", (req, res) =>{
            let body =req.body;

            let stores =new storesModel1(body);
            stores.save().then((result) =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message: " Quantity has been added"

                });

            }).catch((err) =>{
                return res.status(400).json({
                    error: err
                });

            });
    
        });

        storesController.post("/:row", (req , res) =>{
            let body= req.body;
            
            let stores = new storesModel1(body);
            stores.save().then((result)  =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message: " Row has been added."
                });

            }).catch((err) =>{
                return res.status(400).json({
                    error: err
                });
            });

        });

        storesController.post('/:column',(req , res)  =>{
            let body = req.body;

            let stores = new storesModel1(body);
            stores.save().then((result) =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message : "Column has been added."
                });

            }).catch((err) =>{
                return res.status(400).json({
                    error: err
                });

            });
            
        });

        storesController.put("/:blockid",(req, res) => {
         let{blockid} = req.params;
         let body = req.body;

         storesModel1.findByIdAndUpdate(id, body).then((result) =>{
             return res.status(200).json({
                 affectedId: result._id,
                 message: " The blockid  has been updated"
             });
         }).catch((err) =>{
             return res . status(400).json({
                 error : err
             });

         });

     });


     storesController.patch("/:id/bookid", (req, res)=>{
         let {id} = req.params;
         let {bookid} = req.body;
        
         storesModel.findByIdAndUpdate(id, {bookid: bookid}).then((result)=>{
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
    
    
     storesController.patch("/:id/row", (req, res)=>{
         let {id} = req.params;
         let {row} = req.body;
        
         storesModel.findByIdAndUpdate(id, {row: row}).then((result)=>{
             return res.status(200).json({
                 affectedId: result._id,
                 message: "The row has been updated."
             });
         }).catch((err)=>{
             return res.status(400).json({
                 error: err
             });

         });

     });
    
    
    
    //  storesController.delete("/:column", (req, res)=>{
    //      let {column} = req.params;
        
    //      storesModel.findByIdAndDelete(id).then((result)=>{
    //          return res.status(200).json({
    //             deletedId: result._id,
    //              message: "The column has been deleted."
    //          });
    //      }).catch((err)=>{
    //          return res.status(400).json({
    //              error: err
    //          });

    //      });
         
    //  });
    





module.exports = storesController;