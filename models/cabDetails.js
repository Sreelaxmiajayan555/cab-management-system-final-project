const {Sequelize, DataTypes, DATE} = require('sequelize');
const db = require('./db');
const Driver = require('./driver');

const cabDetails = db.sequelize.define('cabDetails',{
  cabNo : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey:true
  },
  cabName : {
    type : DataTypes.STRING(50),
    allowNull : false
  },
  cabDescription : {
    type : DataTypes.STRING(50),
    allowNull:false
  },
  cabTotalCapacity : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  driverId : {
    type:DataTypes.INTEGER,
    allowNull : false
  }

})

module.exports = cabDetails;