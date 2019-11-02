
var express = require('express');
var expressJwt = require('express-jwt'),
cors = require('cors'),
passportConfig = require('./facebook/passport.js');

app = express(),
port = process.env.PORT || 3000;

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

passportConfig();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var routes = require('./routs.js'); //importing route
routes(app); //register the route


app.listen(port);
console.log('Rodando na porta: ' + port);