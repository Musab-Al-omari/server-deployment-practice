function errorFound(err,request,response,next) {
    console.log(err);
    response.status(500).json({
        err:err,
        message:`server error ${err.message}`,
        path:request.path,
        query:request.query
    })
    
}
module.exports={
    errorFound:errorFound   
}