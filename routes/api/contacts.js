const express = require('express');
const router = express.Router();
const {
  getContacts,
  getById,
  createContact,
  deleteContact,
  validateCreateContact,
  changeContact,
  validateUpdateContact,
} = require('../controllers/contacts');

router.get('/', getContacts);

router.get('/:contactId', getById);

router.post('/', validateCreateContact, createContact);

router.delete('/:contactId', deleteContact);

router.patch('/:contactId', validateUpdateContact, changeContact);

module.exports = router;
