const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

router.post('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','show.html'));
});


module.exports = router;