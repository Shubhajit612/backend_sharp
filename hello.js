// const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name ='title'><br><input type='number' name='size'><br><button type='submit'>Add Product</button></form>");
});

app.post('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send("<h1>Add-Product..!!</h1>");
});





// let server = http.createServer(app);


// server.listen(4000);

app.listen(4000);