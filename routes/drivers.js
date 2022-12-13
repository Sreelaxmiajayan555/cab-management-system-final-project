const express = require('express');
const dc = require('../controllers/driverController');
const router = express.Router('{}');

router.get('/driverDetails',dc.driverDetails);
router.get('/addNewDriver',dc.addDriver);
router.post('/addNewDriver',dc.addDriverPost);
router.get('/editDriver/:driver_Id',dc.editDriver);
router.post('/editDriver/:driver_Id',dc.editDriverPost);
router.get('/deleteDriver/:driver_Id',dc.deleteDriver);


router.get('/driverLogin',dc.driverLogin);

router.post('/driverLogin',dc.driverLoginPost);



router.get('/driverRegister',dc.driverRegistration);

router.post('/driverRegister',dc.driverRegistrationPost);



router.get('/driverProfile',dc.driverProfile)

router.get('/availableBookings',dc.viewAllBookings);

router.get('/editDriverAccount',dc.editDriverAccount);

router.post('/editDriverAccount',dc.editDriverAccountPost);

router.get('/deleteDriver',dc.deleteDriverAccount);

module.exports = router;