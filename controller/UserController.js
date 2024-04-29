// const { response } = require("express")
const userModel = require("../model/userModel");

const jwt = require("jsonwebtoken");

const handleUserSignup  = ( req, res)=>{
  try{
    userModel.create(req.body).then(()=>{
      res.json({"message": "created succesfully"}).status(201);
    }).catch((err)=>{
      res.json({"message": "this is wrong", err: err}).status(500);
    })
  }
  catch(err){
    res.json({"message": "this is wrong", err:err}).status(500);

  }
}




const handleUserLogin = (req, res) => {
  let { email } = req.body; // destructuring  of object
  try{
  userModel.find({ email: email }).then((response) => {
    if (response.length >= 1) {
      jwt.sign(req.body, process.env.SECRET_KEY, (err, token) => {
        if (err){
          res.json({Message: "this is wrong", err:err}).status(500)
        }
        else {
          res.json({
            Message: "login Succesfully",
            data:req.body,
            token: token,
          });
        }

      });
    }
  });
}
 catch(err){
  res.json({Message: "this is wrong", err:err}).status(500)
 }
}

const getDetails = (req,res)=>{

}
module.exports = { handleUserSignup, handleUserLogin,getDetails };
