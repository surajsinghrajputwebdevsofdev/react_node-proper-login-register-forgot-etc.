import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Changepass, Createuser, Forgotpassword, Login } from "./controller/Register.js";
import {registerValidation} from "./validations/validationuniqe.js";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

app.post("/register",registerValidation(),Createuser);
app.post("/login",Login);
app.post("/Changepass",Changepass);
app.post("/forgotpassword",Forgotpassword);


// const productroutes=require("./routes/authroutes/Authrout.js");
// app.use("/product",productroutes)
mongoose.connect(process.env.DB_URL).then((d)=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("database connection error");
});

app.listen(process.env.PORT,()=>{
    console.log("server running at port : " + process.env.PORT);
});
// import Authrout from "./routes/authroutes/Authrout.js";

// app.use("/auth", Authrout);