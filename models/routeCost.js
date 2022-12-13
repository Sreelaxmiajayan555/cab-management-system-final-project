const {Sequelize, DataTypes, DATE} = require('sequelize');

const db = require('./db');



const routeCost = db.sequelize.define('routeCost',{

    from : {

        type : DataTypes.STRING(50),

        allowNull:false

    },

    to : {

        type : DataTypes.STRING(50),

        allowNull : false

    },

    cost : {

        type : DataTypes.INTEGER,

        allowNull : false

    }

})



module.exports = routeCost;