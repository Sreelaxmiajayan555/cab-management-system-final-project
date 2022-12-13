const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');


const passenger = db.sequelize.define('Passenger',{
    Passenger_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    firstName : {
        type : DataTypes.STRING(50),
        allowNull : false

    },
    lastName : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(50),
        allowNull : false,
        unique:true
    },
    mobile : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    dob : { 
        type : DataTypes.DATE

    },

    gender :  {
        type : DataTypes.STRING(7),
        allowNull : false
    },

    role : {

        type : DataTypes.INTEGER,

        defaultValue : 0

    }

})

module.exports = passenger ;