const express = require('express');
const router = express.Router();
const path = require('path');

const controllers = require('../controllers/contactus');



router.get('/contactus',controllers.contactUs);

router.post('/success',controllers.success);


module.exports = router;