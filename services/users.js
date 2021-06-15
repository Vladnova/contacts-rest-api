const { User } = require('../models');

const getOne = item => {
  return User.findOne(item);
};

const add = ({ email, password }) => {
  const newUser = new User({ email });
  newUser.setPassword(password);
  return newUser.save();
};

module.exports = {
  getOne,
  add,
};
