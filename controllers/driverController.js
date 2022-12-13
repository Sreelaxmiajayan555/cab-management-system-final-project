const { Result } = require('express-validator');
const db = require('../models/driver');
const bookingDb = require('../models/booking');


module.exports.driverDetails = (req,res,next) => 
{
    db.findAll().then(result => {
        res.render('driverDetails',{
            driverDetails : result
        })
    })
}

module.exports.addDriver = (req,res,next)=>
{
    res.render('addDriver');
}

module.exports.addDriverPost = (req,res,next) => 
{
    db.create({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender
    }).then(res.redirect('/driverDetails'))
}

module.exports.editDriver = (req, res, next) => {
    driver_Id = req.params.driver_Id;
    db.findByPk(driver_Id).then(
        result => {
            console.log(result);
            res.render('editDriver',{
                driverDetails : result
            })
        }
    )
}

module.exports.editDriverPost =async (req, res, next) => {
    await db.update({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender
    },
    {
       where : {
        driver_Id : req.params.driver_Id
       } 
    }).then(
        res.redirect('/driverDetails')
    )
}

module.exports.deleteDriver = (req, res, next) => 
{
    db.destroy({
        where : {driver_Id : req.params.driver_Id}
    }).then(
        res.redirect('/driverDetails')
    )
}



module.exports.driverLogin = (req,res,next) =>

{

    res.render('driverLogin');

}

module.exports.driverLoginPost = async (req,res,next) =>
{
    var credentials = await db.findAll({where : {
        driverEmail : req.body.email,
        driverPassword : req.body.password
    }});
    // console.log("🍗🍗");
    // console.log(credentials);
    if(credentials.length ==0)
    {
        return res.render('driverLogin', {message : 'Invalid credentials'})
    }
    req.session.driverId = credentials[0].dataValues.driver_Id;
    req.session.role = 0;
    res.redirect('/driverProfile')
}
module.exports.driverRegistration = (req,res,next) => 
{
    res.render('driverRegister')
}
module.exports.driverRegistrationPost = (req,res,next)=>
{
    db.create({
        driverName : req.body.driverName,
        driverLiceneceNo : req.body.driverLiceneceNo,
        driverEmail : req.body.driverEmail,
        driverAddress : req.body.driverAddress,
        driverDob : req.body.driverDob,
        driverGender : req.body.driverGender,
        driverPassword : req.body.driverPassword
    }).then(res.redirect('/driverLogin'))
}


module.exports.driverProfile = (req,res,next) =>

{

   
    db.findByPk(req.identity.passenger.id).then(result => {
        
        res.render('driverProfile',

        {
            profileDetails : result,

        })

    })

}


module.exports.viewAllBookings = (req, res, next) => {

    bookingDb.findAll({

        where: {

            driverId : req.session.driverId

        }

    }).then(result =>

        res.render('viewBookings',{

            data : result

        })

        )     

}

module.exports.editDriverAccount = (req, res, next) => {

    db.findByPk(req.session.driverId).then(

        result => {

            res.render('editDriverAccount',{

                driverDetails : result,

                profile: req.identity.passenger

            })

        }

    )

}


module.exports.editDriverAccountPost =async (req, res, next) => {

    await db.update({

        driverName : req.body.driverName,

        driverLiceneceNo : req.body.driverLiceneceNo,

        driverEmail : req.body.driverEmail,

        driverAddress : req.body.driverAddress,

        driverDob : req.body.driverDob,

        driverGender : req.body.driverGender

    },

    {

       where : {

        driver_Id : req.session.driverId

       }

    }).then(

        res.redirect('/driverProfile')

    )

}


module.exports.deleteDriverAccount = (req, res, next)=>{

    db.destroy({

        where : {  driver_Id:  req.session.driverId}

    }).then(

        res.redirect('/driverLogin')

    )

}