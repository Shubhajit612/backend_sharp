const rootDir = require('../util/path');
const path = require('path');
exports.contactUs = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}

exports.success = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','show.html'));
}