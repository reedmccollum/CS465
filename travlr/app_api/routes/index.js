const express = require('express');
const router = express.Router();

const tripsConstroller = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsConstroller.tripsList);

router  
    .route('/trips/:tripsCode')
    .get(tripsConstroller.tripsFindCode);
    
module.exports = router;
