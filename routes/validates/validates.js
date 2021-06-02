const Joi = require('joi');

const create = (req, res, next) => {
  const createUserRules = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });

  const result = createUserRules.validate(req.body);
  if (result.error) {
    return res.status(400).send({ message: 'missing required name field' });
  }

  next();
};

const update = (req, res, next) => {
  const updateUserRules = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
  });
  const resultUpdate = updateUserRules.validate(req.body);
  if (resultUpdate.error) {
    return res.status(400).json({ message: 'missing fields' });
  }
  next();
};

module.exports = {
  create,
  update,
};
