const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product',(req,res,next)=>{
    // res.send("<form action='/admin/product' method='POST'><input type='text' name ='title'><br><input type='number' name='size'><br><button type='submit'>Add Product</button></form>");
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product',(req,res,next) =>{
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    res.redirect('/shop/');
})



module.exports = router;