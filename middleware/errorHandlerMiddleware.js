const errorHandlerMiddleware=(err,req,res,next)=>{
    return res.status(500).json({Error:err})
    // we can also set some custom middleware error message

    // return res.status(500).json({msg:"somthing went wrong try again later!!"})
}

module.exports=errorHandlerMiddleware;