const {users:service}=require("../../../services");
 

const verifyToken=async(req,res,next)=>{
    try {
       
       const result=await service.verifyToken(req.params.verificationToken);
       if(result){
           return res.json({
               status:"success",
               code:200,
               data:{
                message: 'Verification successful',
               }
           })
       } else {
           return next({
               status:"Bed request",
               message:"Your verification token is not valid. Contact with administration"
           })
       }
    } catch (error) {
       next(error) 
    }
}


module.exports=verifyToken;