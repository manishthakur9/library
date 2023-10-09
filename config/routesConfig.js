const express = require("express");

const routesConfig = express();
const booksController = require("../controllers/booksController");
const usersController = require("../controllers/usersController");
const storesController = require("../controllers/storesControlller");
const bookAllocationsController = require("../controllers/bookAllocationsController");
const userLoginsController = require("../controllers/userLoginsController");



routesConfig.use("/books", booksController);

routesConfig.use("/users", usersController);

routesConfig.use("/stores", storesController);

routesConfig.use("/bookAllocations",bookAllocationsController);

routesConfig.use("/userLogins", userLoginsController);


module.exports = routesConfig;