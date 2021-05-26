const Joi = require('joi');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../model/index');

const getContacts = async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const id = Number(req.params.contactId);
    const findContact = await getContactById(id);

    if (!findContact) {
      throw new Error();
    }
    res.status(200).send(findContact);
  } catch (error) {
    res.status(404).send({ message: 'Not found' });
  }
};

const createContact = async (req, res, next) => {
  try {
    const contacts = await addContact(req.body);
    res.status(201).send(contacts);
  } catch (error) {
    res.status(400).send({ message: 'missing required name field' });
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const id = Number(req.params.contactId);
    await removeContact(id);

    res.status(200).send({ message: 'contact deleted' });
  } catch (error) {
    res.status(404).send({ message: 'Not found' });
  }
};

const changeContact = async (req, res, next) => {
  try {
    const id = Number(req.params.contactId);
    const body = req.body;
    const changeContact = await updateContact(id, body);
    res.status(200).send(changeContact);
  } catch (error) {
    res.status(404).send({ message: 'Not found' });
  }
};

const validateCreateContact = (req, res, next) => {
  const createUserRules = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

  const result = createUserRules.validate(req.body);
  if (result.error) {
    return res.status(400).send({ message: 'missing required name field' });
  }

  next();
};

const validateUpdateContact = (req, res, next) => {
  const updateUserRules = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
  }).min(1);
  const resultUpdate = updateUserRules.validate(req.body);
  if (resultUpdate.error) {
    return res.status(400).json({ message: 'missing fields' });
  }
  next();
};

module.exports = {
  getContacts,
  getById,
  createContact,
  deleteContact,
  validateCreateContact,
  changeContact,
  validateUpdateContact,
};
