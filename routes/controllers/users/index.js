const signup = require('./signup');
const login = require('./login');
const current = require('./current');
const logout = require('./logout');
const avatar = require('./avatar');
const verifyToken=require('./verifyToken');
// const verify=require('./verify');

module.exports = {
  signup,
  login,
  current,
  logout,
  avatar,
  verifyToken,
  // verify,
};
