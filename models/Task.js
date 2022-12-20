const mongoose=require("mongoose");

const taskSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is manatory"],
        trim:true,
        maxLength:20
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("task",taskSchema);