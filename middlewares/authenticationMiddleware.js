const passenger = require('../models/passengers');
const driver = require('../models/driver');
module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        passenger: null
    }
    var role = req.session.role
    if (role == 1) {
        if (req.url == "/login" || req.url == "/register") {
            return next();
        }
        let passengerId = req.session.passengerId;

        if (!passengerId || passengerId == null) {
            return res.redirect("/login");
        }

        let passengerFromDb = await passenger.findByPk(passengerId);
        // console.log(passengerFromDb)
        if (passengerFromDb == null) {
            return res.redirect("/login");
        }

        req.identity.isAuthenticated = true;
        req.identity.passenger = {
            id: passengerFromDb.dataValues.Passenger_id,
            firstName: passengerFromDb.dataValues.firstName,
            lastName: passengerFromDb.dataValues.lastName,
            email: passengerFromDb.dataValues.email,
            mobile: passengerFromDb.dataValues.mobile,
            dob: passengerFromDb.dataValues.dob,
            role: passengerFromDb.dataValues.role
        }
        next()
    }
    else {
        if (req.url == '/login' || req.url == '/register' || req.url == '/driverlogin' || req.url == '/driverRegister') {
            return next();
        }
        let driverId = req.session.driverId;
        if (!driverId || driverId == null) {
            return res.redirect("/driverlogin");
        }
        let driverFromDb = await driver.findByPk(driverId);
        
        if (driverFromDb == null) {
            return res.redirect('/driverlogin');
        }
        req.identity.isAuthenticated = true;
        req.identity.passenger = {
            id: driverFromDb.dataValues.driver_Id,
            name: driverFromDb.dataValues.driverName,
            licence: driverFromDb.dataValues.driverLicenenceNo,
            email: driverFromDb.dataValues.driverEmail,
            address: driverFromDb.dataValues.driverAddress,
            dob: driverFromDb.dataValues.driverDob,
            gender : driverFromDb.dataValues.driverGender,
            book_id: null
        }
        next();

    }
}
    
