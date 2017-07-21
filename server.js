var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: '123456789', resave: false, saveUninitialized: true}));
app.use(express.static("public"));

app.get('/', function(req,res){
  res.sendfile('views/index.html');
})

app.listen((process.env.PORT || 5000),function(err){
  if (err) console.log(err);
  else console.log('Server is listening at 5000!');
});
