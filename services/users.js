const { User } = require('../models');
const { avatar } = require('../routes/controllers/users');
const {nanoid}=require('nanoid');
const verificationEmail=require('../middleware/verificationEmail');

const getOne = filter => {
  return User.findOne(filter);
};

const add = async({ email, password }) => {
  const verifyToken=nanoid();
  try {
    await verificationEmail(verifyToken,email)
  } catch (error) {
    throw new Error("Service Unavailable")
  }
  const newUser = new User({ email, verifyToken });
  newUser.setPassword(password);
  return newUser.save();
};

const findByField=async(field)=>{
  const result =await User.findOne(field);
  return result;
}

const updateAvatar = async (id, avatarURL) => {
  return User.findByIdAndUpdate(id, { avatarURL }, { new: true });
};

const verifyToken=async(token)=>{
  const user=await findByField({verifyToken:token});
  if(user){
    await user.updateOne({verify:true, verifyToken:null});
    return true;
  };
  
  return false

};

module.exports = {
  getOne,
  add,
  updateAvatar,
  verifyToken,
};
