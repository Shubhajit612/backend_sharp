const express = require('express');

const path = require('path');

const router = express();

const rootDir = require('../util/path');

router.get('/',(req,res,next)=>{
    // res.send("<h1>Add-Product..!!</h1>");

    res.sendFile(path.join(rootDir,'views','shop.html'));
});


module.exports = router;