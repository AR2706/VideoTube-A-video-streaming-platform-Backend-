//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js"
//import mongoose from "mongoose";
//import {DB_Name} from "./constants";
//import express from "express";

dotenv.config({path:'./env'})

//const app = express();


connectDB()
 
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
