// require all dependencies
var express = require('express');
var logger = require('morgan');
const cron = require("node-cron");

var server1 = express();
var server2 = express();
var server3 = express();
var server4 = express();
var server5 = express();
let serve1, serve2, serve3, serve4, serve5 = null;

// add logging and static middleware to express
server1.use(logger('dev'));
server1.use(express.static('images'));

// set up the template engine
server1.set('views', './views');
server1.set('view engine', 'pug');

// GET response for '/'
server1.get('/', function (req, res, next) {
    try {
        res.render('index', { title: 'Taxi App Assignment - Home'});
    } catch (e) { 
        next(e);
    }
});

server1.get('/aboutus', function (req, res, next) {
    try {
        res.render('aboutus', { title: 'Taxi App Assignment - About Us'});
    } catch (e) {
        next(e);
    }
});
server1.get('/ordertaxi', function (req, res, next) {

    try {
        res.render('ordertaxi', { title: 'Taxi App Assignment - Order Taxi' });
    } catch (e) {
        next(e);
    }
});
server1.get('/contact', function (req, res, next) {
    try {
        res.render('contact', { title: 'Taxi App Assignment - Contact'});

    } catch (e) { 
        next(e);
    }
});
server1.get('/rides', function (req, res, next) {
    try {
        res.render('rides', { title: 'Taxi App Assignment - Pending Rides'});

    } catch (e) { 
        next(e);
    }
});

// add logging and static middleware to express
server2.use(logger('dev'));
server2.use(express.static('images'));

// set up the template engine
server2.set('views', './views');
server2.set('view engine', 'pug');

// GET response for '/'
server2.get('/', function (req, res, next) {
    try {
        res.render('index', { title: 'Taxi App Assignment - Home'});
    } catch (e) { 
        next(e);
    }
});

server2.get('/aboutus', function (req, res, next) {
    try {
        res.render('aboutus', { title: 'Taxi App Assignment - About Us'});
    } catch (e) {
        next(e);
    }
});
server2.get('/ordertaxi', function (req, res, next) {

    try {
        res.render('ordertaxi', { title: 'Taxi App Assignment - Order Taxi' });
    } catch (e) {
        next(e);
    }
});
server2.get('/contact', function (req, res, next) {
    try {
        res.render('contact', { title: 'Taxi App Assignment - Contact'});

    } catch (e) { 
        next(e);
    }
});
server2.get('/rides', function (req, res, next) {
    try {
        res.render('rides', { title: 'Taxi App Assignment - Pending Rides'});

    } catch (e) { 
        next(e);
    }
});

// add logging and static middleware to express
server3.use(logger('dev'));
server3.use(express.static('images'));

// set up the template engine
server3.set('views', './views');
server3.set('view engine', 'pug');

// GET response for '/'
server3.get('/', function (req, res, next) {
    try {
        res.render('index', { title: 'Taxi App Assignment - Home'});
    } catch (e) { 
        next(e);
    }
});

server3.get('/aboutus', function (req, res, next) {
    try {
        res.render('aboutus', { title: 'Taxi App Assignment - About Us'});
    } catch (e) {
        next(e);
    }
});
server3.get('/ordertaxi', function (req, res, next) {

    try {
        res.render('ordertaxi', { title: 'Taxi App Assignment - Order Taxi' });
    } catch (e) {
        next(e);
    }
});
server3.get('/contact', function (req, res, next) {
    try {
        res.render('contact', { title: 'Taxi App Assignment - Contact'});

    } catch (e) { 
        next(e);
    }
});
server3.get('/rides', function (req, res, next) {
    try {
        res.render('rides', { title: 'Taxi App Assignment - Pending Rides'});

    } catch (e) { 
        next(e);
    }
});

// add logging and static middleware to express
server4.use(logger('dev'));
server4.use(express.static('images'));

// set up the template engine
server4.set('views', './views');
server4.set('view engine', 'pug');

// GET response for '/'
server4.get('/', function (req, res, next) {
    try {
        res.render('index', { title: 'Taxi App Assignment - Home'});
    } catch (e) { 
        next(e);
    }
});

server4.get('/aboutus', function (req, res, next) {
    try {
        res.render('aboutus', { title: 'Taxi App Assignment - About Us'});
    } catch (e) {
        next(e);
    }
});
server4.get('/ordertaxi', function (req, res, next) {

    try {
        res.render('ordertaxi', { title: 'Taxi App Assignment - Order Taxi' });
    } catch (e) {
        next(e);
    }
});
server4.get('/contact', function (req, res, next) {
    try {
        res.render('contact', { title: 'Taxi App Assignment - Contact'});

    } catch (e) { 
        next(e);
    }
});
server4.get('/rides', function (req, res, next) {
    try {
        res.render('rides', { title: 'Taxi App Assignment - Pending Rides'});

    } catch (e) { 
        next(e);
    }
});

// add logging and static middleware to express
server5.use(logger('dev'));
server5.use(express.static('images'));

// set up the template engine
server5.set('views', './views');
server5.set('view engine', 'pug');

// GET response for '/'
server5.get('/', function (req, res, next) {
    try {
        res.render('index', { title: 'Taxi App Assignment - Home'});
    } catch (e) { 
        next(e);
    }
});

server5.get('/aboutus', function (req, res, next) {
    try {
        res.render('aboutus', { title: 'Taxi App Assignment - About Us'});
    } catch (e) {
        next(e);
    }
});
server5.get('/ordertaxi', function (req, res, next) {

    try {
        res.render('ordertaxi', { title: 'Taxi App Assignment - Order Taxi' });
    } catch (e) {
        next(e);
    }
});
server5.get('/contact', function (req, res, next) {
    try {
        res.render('contact', { title: 'Taxi App Assignment - Contact'});

    } catch (e) { 
        next(e);
    }
});
server5.get('/rides', function (req, res, next) {
    try {
        res.render('rides', { title: 'Taxi App Assignment - Pending Rides'});

    } catch (e) { 
        next(e);
    }
});

// start up the server
console.log(process.env.PORT);
serve1 = server1.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
cron.schedule("50 5 * * *", function(){ 
    serve2 = server2.listen(process.env.PORT || 3001, function () {
        console.log('Listening on http://localhost:' + (process.env.PORT || 3001));
    });
    serve3 = server3.listen(process.env.PORT || 3002, function () {
        console.log('Listening on http://localhost:' + (process.env.PORT || 3002));
    });
    serve4 = server4.listen(process.env.PORT || 3003, function () {
        console.log('Listening on http://localhost:' + (process.env.PORT || 3003));
    });
    serve5 = server5.listen(process.env.PORT || 3004, function () {
        console.log('Listening on http://localhost:' + (process.env.PORT || 3004));
    });
});

cron.schedule("0 12 * * *", function(){
    serve5.close(() => {
        console.log('HTTP server closed');
      });
      serve4.close(() => {
        console.log('HTTP server closed');
      });
});

cron.schedule("20 15 * * *", function(){
    serve4 = server4.listen(process.env.PORT || 3003, function () {
        console.log('Listening on http://localhost:' + (process.env.PORT || 3003));
    });
});

cron.schedule("0 19 * * *", function(){
    serve4.close(() => {
        console.log('HTTP server closed');
      });
      serve3.close(() => {
        console.log('HTTP server closed');
      });
});

cron.schedule("0 22 * * *", function(){
    serve2.close(() => {
        console.log('HTTP server closed');
      });
});
