const express =require('express')
const dotenv=require('dotenv') 
const mongoose =require("mongoose")
const cors=require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');

const UserAuthRoutes=require('./routes/UserAuthRoutes')
dotenv.config();
const app=express();
app.use(express.json())
app.use(cors())
app.use("/UserAuth",UserAuthRoutes)
mongoose.connect(process.env.MONGODBURI).
then(()=>{  //Starting the server
  app.listen(process.env.PORT,()=>{
      console.log("Server is Running",process.env.PORT)
  })}).
catch((e)=>{console.log("not Connected",e)})
