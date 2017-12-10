var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

//var home = require('../app/routes/home');

module.exports = function(){
    var app = express();
    
    app.set('port',3000);
    app.set('ip','127.0.0.1');
    //app.use(express.static('./public'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(cors());

    /* RTA para que todos os navegadores entendam os
       verbos HTTP PUT e DELETE
    */
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(cookieParser());
    app.use(session({
        secret: 'Pérolas lindas e brilhantes',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // cwd: change working directory
    consign({cwd: 'app'}).include('models').then('controllers').then('routes').into(app);

    return app;
}