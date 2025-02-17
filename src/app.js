import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));// to enable croos origin resource sharing 

app.use(express.json({
    limit:"16kb"
}))// used to config the data coming from app
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))//used to config the data coming from url
app.use(express.static("public"))//used to store the files /folders(public assets accessed by anyone)
app.use(cookieParser())//used for CRUD operation on cookies

//routes import

import userRouter from './routes/user.routes.js'// we can directly import it in any name


//routes declaration
app.use("/api/v1/users",userRouter)
//http://localhost:8000/api/v1/users/register





export { app };
