const express = require('express');

const bc = require('../controllers/bookingController');

const router = express.Router({});



router.get('/booking/:cabNo',bc.booking);
router.post('/booking/:cabNo',bc.bookingPost);

router.get('/payment/:bookingId',bc.payment);
router.get('/paymentInvoice/:bookingId',bc.paymentInvoice);

// router.get('/viewBookings',bc.viewBooking);

// router.post('/viewBookings',bc.sreachBookingByDate);

router.get('/viewBookings',bc.viewBooking);

router.post('/viewBookings',bc.searchBookingByDate);

module.exports = router;