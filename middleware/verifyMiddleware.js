 const jwt  = require('jsonwebtoken')
 const verify = (req, res, next)=>{
   const tokencheck  = req.headers('authorization');
    const extractedToken = tokencheck.split(' ')[1];
// " bearer <token>"
 if(extractedToken){
 jwt.verify(extractedToken, process.env.SECRET_KEY,(err,decode)=>{

   if (err){
    res.json({message: " this is wrong", err:err}).status(500);
   }
   else{
     req.email = decode.email
     next();
   
   } 
 })


 }


  module.exports = 'verify';
}