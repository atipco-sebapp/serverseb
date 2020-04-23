var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var session= require('express-session');
// const uuid = require('uuid/v4');
const { v4: uuidv4 } = require('uuid');
// uuidv4();
const FileStore = require('session-file-store')(session);
// const jwt = require('./_helpers/jwt.js');
// const errorHandler = require('./_helpers/error-handler');
var path = require('path');
app = express();

var sess_options =
  { retries   : 50
  , minTimeout: 100
  , maxTimeout: 200
  };
//Cargar rutas
// var appRoutes = require('./routes/approutes');
app.use(session({
  genid: (req) => {
    // console.log('Inside the session middleware')
    // console.log(req.sessionID)
    return uuidv4() // use UUIDs for session IDs
  },
  store: new FileStore(sess_options),
  secret: 'keyboard cat',
  cookie: { maxAge: 3*60*1000 },
  resave: false,
  saveUninitialized: true
}));
// var p=path.join(__dirname,"\\routes\\mypro\\ol\\");
// console.log(p);
// app.use(express.static(path.join(__dirname,"\\routes\\mypro\\")));
//app.use(express.static(path.join(__dirname+"\\routes\\mypro\\ol\\")));
//cors
app.use(cors({origin: '*',

  'allowedHeaders': ['*', 'Content-Type'],
  'exposedHeaders': ['*'],
  
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false}));
app.use(express.json());

app.use(bodyParser.urlencoded({
   
    extended: true,
    }));
app.use(bodyParser.json());
const {InitiateMongoServer} = require("./_helpers/db");

// Initiate Mongo Server
InitiateMongoServer();
// app.use(jwt());

// api routes
const user = require("./routes/user"); //new addition
app.use("/user", user);
// app.use('/users', require('./users/users.controller'));

// global error handler
// app.use(errorHandler);
// app.get("/",function(req,res){
//     res.json("Hello");
// });






module.exports = app;