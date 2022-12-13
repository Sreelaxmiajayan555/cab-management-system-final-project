const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const booking = db.sequelize.define('bookingDetails',
{
    bookingId : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    dateOfBooking : {
        type : DataTypes.DATEONLY,
        allowNull : false
    },
    cabFrom : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    cabTo : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    bookingTime : {
        type : DataTypes.TIME,
        allowNull : false
    },
    cabNo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    cost : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    passengerId : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    driverId : {
        type : DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = booking;