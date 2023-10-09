const usersModel = require("../models/usersModel");

const usersController = require("express").Router();

const middleware = (req, res, next) =>{
    console.log("Middleware is working");
    const apiKey = req.headers ['x-api-key'];
    if(! apiKey  || apiKey !== 'ABCD098314'){
        return res.status(401).json({ error : 'Unauthorized '});
        
    }
    next();
}

usersController.get("/", (req, res)=>{
    userssModel.find().then((result) =>{
        return res.status(200).json({
           data: result
        });
   }).catch((err) =>{
       return res.status(400).json({
           error: err
       });

   });

});


usersController.get("/:id", (req, res) => {
    let {id} = req.params;
    usersModel.findById(id).then((result)=>{
        return res.status(200).json({
            data: result
        }); 
    }).catch((err)=>{
        return res.status(400).json({
            error: err
        });

    });
    
});

    usersController.post("/", (req, res) => {
        let body = req.body;

        let users = new usersModel(body);
        users.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message: " New user has been added."

            });
        }).catch((err) =>{
            return res.status(400).json({
                error: err
            });
        });

    });


    usersController.post("/",(req , res)=> {
        let body = req.body;

        let users =new usersModel(body);
        users.save().then((result) =>{
            return res.status(201).json({
                insertedId : result._id,
                message: " Class has been added"
            });
        }).catch((err) =>{
            return res.status(400).json({
                error : err
            });

        });

    });

        usersController.post("/",( req, res) =>{
            let body = req.body;

            let users =new usersModel(body);
            users.save().then((result) =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message: "Section has been added"

                });

            }).catch((err) =>{
                return res.status(400).json({
                    error:err
                });
            });

        });

        usersController.post("/", (req, res) =>{
            let body =req.body;

            let users =new usersModel(body);
            users.save().then((result) =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message: " Address has been added"

                });

            }).catch((err) =>{
                return res.status(400).json({
                    error: err
                });

            });
    
        });

        usersController.post("/", middleware, (req , res) =>{
            let body= req.body;
            

            let users = new usersModel(body);
            users.save().then((result)  =>{
                return res.status(201).json({
                    insertedId : result._id,
                    message: " Email has been added."
                });

            }).catch((err) =>{
                return res.status(400).json({
                    error: err
                });

            });

        });

    usersController.put("/:id",(req, res) => {
        let{id} = req.params;
        let body = req.body;

        usersModel.findByIdAndUpdate(id, body).then((result) =>{
            return res.status(200).json({
                affectedId: result._id,
                message: " The user has been updated"
            });
        }).catch((err) =>{
            return res . status(400).json({
                error : err
            });

        });

    });


    usersController.patch("/:id/name", (req, res)=>{
        let {id} = req.params;
        let {name} = req.body;
        
        usersModel.findByIdAndUpdate(id, {name: name}).then((result)=>{
            return res.status(200).json({
                affectedId: result._id,
                message: "The user name has been updated."
            });
        }).catch((err)=>{
            return res.status(400).json({
                error: err
            });

        });
        
    });
    
    
    usersController.patch("/:id/section", (req, res)=>{
        let {id} = req.params;
        let {section} = req.body;
        
        usersModel.findByIdAndUpdate(id, {section: section}).then((result)=>{
            return res.status(200).json({
                affectedId: result._id,
                message: "The users section has been updated."
            });
        }).catch((err)=>{
            return res.status(400).json({
                error: err
            });
        });
    });
    
    
    
    usersController.delete("/:id", (req, res)=>{
        let {id} = req.params;
        
        usersModel.findByIdAndDelete(id).then((result)=>{
            return res.status(200).json({
                deletedId: result._id,
                message: "The user has been deleted."
            });
        }).catch((err)=>{
            return res.status(400).json({
                error: err
            });
        });
    });
    





module.exports = usersController;