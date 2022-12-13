const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const Driver = db.sequelize.define('driver',{
    driver_Id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    driverLiceneceNo : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    driverName : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    driverPassword : {
        type : DataTypes.STRING(50),
        allowNull : true,
        defaultValue:null
    },
    driverEmail : {
        type : DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    driverAddress:
    {
        type : DataTypes.STRING(50)
    },
    driverDob : {
        type: DataTypes.DATE
    },
    driverGender:{
        type : DataTypes.STRING(7),
        allowNull:false
    }
})

module.exports = Driver;


