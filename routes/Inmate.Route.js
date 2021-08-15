const inmate = require('../controllers/Inmate.Controller');
const express = require('express')
const router = express.Router()

//Inmage Endpoints
//Getting all the Inmage 

router.post('/searchinmate', inmate.searchInmateByNameorCode);
router.post('/register', inmate.registerInmate);
router.post("/uploadImage", inmate.ImageUpload);


module.exports = router



