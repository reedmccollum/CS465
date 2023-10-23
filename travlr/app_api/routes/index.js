const express = require('express');
const router = express.Router();

const tripsConstroller = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsConstroller.tripsList)
    .post(tripsConstroller.tripsAddTrip);

router  
    .route('/trips/:tripsCode')
    .get(tripsConstroller.tripsFindCode)
    .put(tripsConstroller.tripsUpdateTrip);

module.exports = router;
