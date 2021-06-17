const { User } = require('../models');
const { avatar } = require('../routes/controllers/users');

const getOne = filter => {
  return User.findOne(filter);
};

const add = ({ email, password }) => {
  const newUser = new User({ email });
  newUser.setPassword(password);
  return newUser.save();
};

const updateAvatar = async (id, avatarURL) => {
  return User.findByIdAndUpdate(id, { avatarURL }, { new: true });
};

module.exports = {
  getOne,
  add,
  updateAvatar,
};
