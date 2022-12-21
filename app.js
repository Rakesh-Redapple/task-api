const express= require("express");
const mongoose=require("mongoose");
const app=express();
const dotenv=require("dotenv");
const TaskRoutes=require("./routes/taskRoute");
const errorHandlerMiddleware=require("./middleware/errorHandlerMiddleware");
dotenv.config({path:"./.env"});
let port=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/v1",TaskRoutes);
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log("DB Connected!!!");
});
app.use(errorHandlerMiddleware);
app.all("*",(req,res,next)=>{
    res.status(404).json({status:"fail",message:`page not found ${req.originalUrl}`});
})
//dadsdsf
app.listen(port,()=>{
    console.log(`Server is up on port:${port}`);
})



