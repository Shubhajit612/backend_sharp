// const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Shubhajit ");
    next();
});


app.use((req,res,next)=>{
    console.log("Sejuti ");
    res.send({key1:"value"});
});





// let server = http.createServer(app);


// server.listen(4000);

app.listen(4000);