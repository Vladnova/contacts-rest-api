const {users:service}=require("../../../services");

const signup= async(req,res,next)=>{
    const {email, password}=req.body;

    try {
        const result = await service.getOne({email});
        if(result){
            res.status(409).json({
                status:"error",
                code:409,
                message: "Email in use",
            })
        }

        const data=await service.add(req.body);
        res.status(201).json({
            status: "success",
            code:201,
            message:"Add success",
        })
        
    } catch (error) {
        next(error) ;
    }
};


module.exports=signup;