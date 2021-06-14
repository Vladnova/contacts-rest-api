const User=require('../models');


const getOne=(item)=>{
    return User.findOne(item)
}

const add=(body)=>{
    const newUser=new User(body);
    return newUser.save();
}



module.exports={
    getOne, 
    add
}