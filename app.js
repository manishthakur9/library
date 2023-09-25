const express = require("express");
const bodyParser = require("body-parser");

const dbConfig = require("./config/dbConfig");
const routesConfig = require("./config/routesConfig");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routesConfig);

app.listen(3000, async ()=>{
    console.log("Server is running on port 3000");
    await dbConfig;
    console.log("Database is connected");
});