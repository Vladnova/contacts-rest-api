const {Contact}=require('../../../models');

const add = async (req, res, next) => {
  const {body}=req;
  try {
    const data = await Contact.create(body);

    res.status(201).json({
      status:"success",
      code:201,
      data:{
        result:data
      }
    }) 
  } catch (error) {
   next(error)
  }
};

module.exports =add;