const express = require("express");
require("express-async-errors");
const app = express();
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const morgan =require("morgan");
//database connection
require("./mongo")


//models
require("./model/Post2");

//Middleware

app.use(bodyParser.json()).use(morgan())


//Routes
app.use("/post1", require("./routes/post1"))

//not found url
app.use((req, res, next)=>{
    req.status =404;
    const error = new Error("Url not found");
    next(error);
});

//error hundeler
app.use((error,req, res, next)=>{
    res.status(req.status || 500).send({
        message:error.message,
        stack:error.stack
    });
});

//database 
app.listen(3002,() =>{
    console.log("Server is running ")
})