
const {Contact}=require('../../../models');

const getAll=async(req,res,next)=>{
    const {query}=req;
    try {
        const result=await Contact.find(query);
        return res.json({
            status:"success",
            code:200,
            data:{
                result,
            }
        })
    } catch (error) {
        next(error)
    }
}


module.exports=getAll;