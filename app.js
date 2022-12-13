const express = require('express');
const parser = require('body-parser');
const path = require('path');

const authMiddleware = require('./middlewares/authenticationMiddleware');

const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const passengerRoute=require('./routes/passengers');
const cabRoute = require('./routes/cabdetails');
const bookingRoute = require('./routes/booking');
const driverRoute  = require('./routes/drivers');
const app = express();

//configuring the app to use handlebars template engine

app.engine('handlebars',engine());

app.set('view engine','handlebars');

//configuring body parser.

app.use(parser.urlencoded({extended:true}));


//configuring static files middleware.
app.use("/static", express.static(path.join(__dirname,'static')));

//configuring cookies

app.use(cookieSession({

    name:'session',

    httpOnly : true,

    keys: ["zxcvbnmasdfghqwertyu"],

    maxAge: 24 * 60 * 60 * 1000

}));

app.use(authMiddleware)
app.use(driverRoute);
app.use(passengerRoute);
app.use(cabRoute);
app.use(bookingRoute);





app.listen(80);