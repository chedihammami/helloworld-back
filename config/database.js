require('dotenv').config() ; 
const mongoose = require('mongoose');

    const devConnection = "mongodb://root:example@10.107.46.60:27017/user-account?authSource=admin"; 
    mongoose.connect(devConnection, {
        useNewUrlParser: true , 
        useUnifiedTopology: true
    }); 
    
    mongoose.connection.on('connected' , () => 
    {
         console.log("Connected to Database"); 
     }
    )
    mongoose.connection.on('error', () => {
        console.log("Error occured while connecting to database"); 
   
    }) ; 