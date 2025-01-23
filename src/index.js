//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import {app} from "./app.js"

import connectDB from "./db/index.js"
//import mongoose from "mongoose";
//import {DB_Name} from "./constants";
//import express from "express";

dotenv.config({path:'./.env'})

//const app = express();
connectDB()
.then(()=>{
    /*app.on("error",(error)=>{
        console.log("ERRR:",error);
        throw err;
    });*/// Listening for an event and giving the error
    
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})


.catch((err)=>{
   console.log("MONGOdb connection failed!!!!",err);
});

 














/*;(async()=>{


    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listenong on port ${process.env.PORT}`)
    })
    }catch(error){
        console.console.log(("Error:",error));
        throw error
        
    }
 })()*/
