const express = require('express');

const cdc = require('../controllers/cabDetailsController');

const router = express.Router({});
router.get('/cabs',cdc.availableCabs);
router.get('/addCab',cdc.addCab);
router.post('/addCab',cdc.addCabPost); 
router.get('/editCabDetails/:cabNo',cdc.editCab);
router.post('/editCabDetails/:cabNo',cdc.editCabPost);
router.get('/deleteCabDetails/:cabNo',cdc.deleteCabDetails);
module.exports = router;