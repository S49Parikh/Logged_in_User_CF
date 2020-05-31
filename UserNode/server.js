/*eslint no-console: 0*/
"use strict";


const express = require('express');
const passport = require('passport');
const xsenv = require('@sap/xsenv');
const JWTStrategy = require('@sap/xssec').JWTStrategy;
const app = express();

const services = xsenv.getServices({ uaa:'uaa_UserDetail' });

console.log("UAA Found!");

passport.use(new JWTStrategy(services.uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));
console.log("JWT");

app.get('/user', function (req, res, next) { 
  var user = req.user;
  console.log('req' + JSON.stringify(req.user));
  res.send(req.user.id);
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('app listening on port ' + port);
});