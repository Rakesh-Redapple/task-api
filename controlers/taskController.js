const TASKMODEL=require("../models/Task");
const asyncWrapper=require("../middleware/async");
exports.addTask=asyncWrapper(async(req,res)=>{
   let task=  await TASKMODEL.create({
        name:req.body.name,
        completed:req.body.completed
    });

    res.status(201).json({success:true,data:task});
})

exports.singleTask=async(req,res)=>{
    try{
        let{id:taskID}=req.params;
        console.log(taskID);
   let data=await TASKMODEL.findOne({_id:taskID}).select("-__v");
   if(!data){
    return res.status(404).json({message:`no task with id:${taskID}`});
   }
   console.log(data,typeof data);
    res.status(200).json({status:"success",result:data});
}
catch(err){
    res.status(500).json({Error:err});
}
}


exports.getAllTask=asyncWrapper(async(req,res)=>{

   let data=await TASKMODEL.find({}).select("-__v");
   console.log(data);
    res.status(200).json({status:"success",result:data});

})
exports.update=async(req,res)=>{
    try{
        const {id:taskID}=req.params;
   let data=await TASKMODEL.findOneAndUpdate({_id:taskID},{name:req.body});
   console.log(data);
    res.status(200).json({status:"success",result:data});
}
catch(err){
    res.status(400).json({status:false,message:err.message});
}
}

exports.delete=async(req,res)=>{
    try{
        let {id:taskID}=req.params;
   let data=await TASKMODEL.findOneAndDelete({_id:taskID}).exec();
   console.log(data);
   if(!data){
    return res.status(404).json({message:`no task with id:${taskID}`});
   }
    res.status(204).json({status:"success",result:data});
}
catch(err){
    res.status(400).json({status:false,message:err.message});
}
}



