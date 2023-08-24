const express = require('express');

const router = express();

router.get('/',(req,res,next)=>{
    res.send("<h1>Add-Product..!!</h1>");
});


module.exports = router;