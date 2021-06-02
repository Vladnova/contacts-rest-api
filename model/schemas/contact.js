const { Schema} = require('mongoose');

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    unique:true,
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
    unique:true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports=contactSchema;