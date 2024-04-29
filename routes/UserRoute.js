 
  var express  = require ("express");
const {handleUserSignup, handleUserLogin,getDetails} = require("../controller/UserController");
const { verify } = require("jsonwebtoken");

    var router  = express.Router();

router.post('/signup',handleUserSignup)
router.post('/login', handleUserLogin);
router.get('/getDetails',verify,getDetails)

module.exports = router

