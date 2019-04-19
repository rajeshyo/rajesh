//importing module
var express =require('express');
var mongoose =require('mongoose');
var cors =require('cors');
var path =require('path');
var bodyparser =require('body-parser');

 var app=express();

 const route =require('./routes/route');

//database connection
 require("./mongo")

 //port
 var port = 3000;

//adding middleware -cors
app.use(cors());

//bodyparser middleware
app.use(bodyparser.json());


//static file
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);


//testing server
app.get('/',(req,res)=>{
res.send('dfdfd')
});


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





 app.listen(port,()=>{
     console.log('server is running post'+port);
 })
