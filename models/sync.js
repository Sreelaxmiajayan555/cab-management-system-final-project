const Passenger = require('./passengers');
Passenger.sync({alter:true});


const Driver = require('./driver');
Driver.sync({alter:true});


const routeCost = require('./routeCost');
routeCost.sync({alter:true});


const cab = require('./cabDetails');


Driver.hasMany(cab, {foreignKey:'driverId'});
cab.belongsTo(Driver, {

    foreignKey:'driverId'

});

cab.sync({alter:true});




const Booking = require('./booking');

cab.hasMany(Booking, {foreignKey:'cabNo'});

Booking.belongsTo(cab,{

    foreignKey: 'cabNo'

});


Driver.hasMany(Booking, {foreignKey:'driverId'});
Booking.belongsTo(Driver,{

    foreignKey:'driverId'

});

Passenger.hasMany(Booking, {foreignKey:'passengerId'});
Booking.belongsTo(Passenger,{

    foreignKey:'passengerId'

});

Booking.sync({alter:true});










