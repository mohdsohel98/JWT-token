
var express  = require("express");
 var app = express();
  var dotenv  =  require('dotenv');
   const router  = require('./routes/UserRoute')
   var bodyParser = require('body-parser');
    var mongoose = require('mongoose');


  dotenv.config();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extends:true}));


 mongoose.connect('mongodb+srv://khansohel8960:Sohel0786@cluster0.hpb0dwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  // string option
 useUnifiedTopology : true,
 useNewUrlParser: true
 }).then(()=>{
  console.log("connected to db ")
 });

 app.use('/api/v1/user',router) // router middleware 

  app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`)
  })


  //   http://localhost:5002/api/v1/user/signup

  //  packages ->  body-parser, nodemon , jsonwebtoken , express , mongoose 