const db = require('../models/cabDetails');
const driverdb = require('../models/driver');
module.exports.availableCabs = (req,res,next) =>

{
    db.findAll().then(cabs=>{

        res.render('cabDetails',{

            cabDetails:cabs,

            data: req.identity.passenger

        });

    })

}
module.exports.addCab = (req,res,next) =>

{

    driverdb.findAll().then(driver=>

        {

           

            res.render('addCab',{driverName : driver})

        })

}
module.exports.addCabPost = (req,res,next) =>

{

    var temp = req.body.drivername;

    var newTemp = temp.split(':');

   

    db.create({

        cabName : req.body.cabName,

        cabDescription : req.body.cabDescription,

        cabTotalCapacity : req.body.cabTotalCapacity,

        driverId : newTemp[1]

    }).then(res.redirect('/home'))

    .catch(res.redirect('/addCab'));

}
module.exports.editCab = (req,res,next) =>

{

    let cabNo = req.params.cabNo

    driverdb.findAll().then(driver => {

        db.findOne({

            where : {

                cabNo : cabNo

            }}).then((cabDetails)=>{

            res.render('editCab',{

                driverName : driver,

                cabDetails : cabDetails

            })

        })

    })

}
//updating cab details by admin

module.exports.editCabPost = async(req,res,next) =>

{

    var temp = req.body.driverName;

    var newTemp = temp.split(':');

    await db.update({

        cabName : req.body.cabName,

        cabDescription : req.body.cabDescription,

        cabTotalCapacity : req.body.cabTotalCapacity,

        driverId : newTemp[1]

    },

    {

        where : {

            cabNo : req.params.cabNo

        }

    }).then(

        res.redirect('/cabs')

    )

}
module.exports.deleteCabDetails = async(req,res,next) =>

{

    let cabNo = req.params.cabNo;

    let cabFromDb = await db.findByPk(cabNo);

    if (cabFromDb != null)

    {

        await db.destroy({

            where : {cabNo : cabNo}

        }).then(res.redirect('/home'))

    }

}

