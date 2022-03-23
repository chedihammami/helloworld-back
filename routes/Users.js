const user = require('express').Router(); 
const User = require("../models/User"); 
user.get("/", async ( req , res ,next) => 
{

     try {
        const users = await User.find(); 
        res.send(users); 
     }catch(err) 
     {
          next(err); 
     }
})
module.exports = user ; 