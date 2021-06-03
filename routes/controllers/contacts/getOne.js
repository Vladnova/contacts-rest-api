const {Contact}=require('../../../model');

const getOne= async(req,res,next)=>{
    const {contactId}=req.params;

    try {
        const result =await Contact.findById(contactId);
        console.log(result);
        if(!result){
            return res.status(404).json({
                status: 'error',
                code:404,
                message:'Not found'
            })
        }
        return res.json({
            status:'success',
            code:200,
            data:{
                result,
            }
        })
    } catch (error) {
        next(error)
    }

}

module.exports=getOne;