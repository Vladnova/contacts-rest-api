const {Schema}=require("mongoose");


const userSchema=Schema({
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength:6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: null,
    },
  })


module.exports=userSchema;