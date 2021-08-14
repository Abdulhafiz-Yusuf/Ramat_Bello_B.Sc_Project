const inmate = require('../controllers/Inmate.Controller');
const express = require('express')
const router = express.Router()

//Bloodcenter Endpoints
//Getting all the Bloodcenter 

router.post('/searchinmate', inmate.searchInmateByNameorCode);
router.post('/register', inmate.registerInmate);
// router.post('/addBooking', inmate.addBooking);
// router.get('/', inmate.readAllinmate);

module.exports = router



