require('dotenv').config();
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3001 ; 
const User = require("./models/User"); 
const cors = require('cors'); 
require('./config/database'); 
app.use(cors());  
/* ------------ Router ---------------- */ 
app.get("/", async ( req , res , next) => 
{
     try {
        const users = await User.find(); 
        res.send(users);
     }catch(err) 
     {
          next(err); 
     }
})
/* ------------ Error Handling ---------------- */ 
app.use((err,req,res,next) => 
{
    if (err.status) 
     res.status(err.status).send(err.message);
     else  
     res.sendStatus(500).send('internal Error'); 
})

/* ------------ Server ---------------- */ 
app.listen( PORT , () => 
{
     console.log(`Server listening on PORT: ${PORT}`); 
});
