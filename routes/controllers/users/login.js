const {users:service}=require("../../../services");


const login=async(req,res,next)=>{
    const{email, password}=req.body;

    try {
        const user=await service.getOne({email});

        if(!user||user.password===password){
            res.status(400).json({
                status:"error",
                code:400,
                message:"Email or password is wrong"
            })
        };
        const token="w965wqd4w.e5888gflnh.trrwregvt"
        res.json({
            status:"success", 
            code:200,
            data:{
                token
            }
        })
    } catch (error) {
        next(error)
    }
}


module.exports=login;