const {Contact}=require('../../../models');

const remove=async(req,res,next)=>{
    const {contactId}=req.params;

    try {
        await Contact.findByIdAndRemove(contactId);
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