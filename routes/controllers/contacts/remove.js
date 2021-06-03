const {Contact}=require('../../../model');

const remove=async(req,res,next)=>{
    const {contactId}=req.params;

    try {
        const result =await Contact.findByIdAndRemove(contactId);
        console.log(result);
        return res.json({
            status:'success',
            code:200,
            message:'Contact deleted'
        })
    } catch (error) {
        next(error)
    }

}

module.exports=remove;