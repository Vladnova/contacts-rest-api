const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  try {
    const contactsList = await fs.readFile(contactsPath);
    return JSON.parse(contactsList);
  } catch (error) {
    throw error;
  }
};

const getContactById = async contactId => {
  try {
    const contacts = await listContacts();
    const contactFound = contacts.find(contact => contact.id === contactId);
    return contactFound;
  } catch (error) {
    throw error;
  }
};

const removeContact = async contactId => {
  try {
    const contacts = await listContacts();
    const contactIndex = findIndexContact(contacts, contactId);

    contacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts;
  } catch (error) {
    throw error;
  }
};

const addContact = async body => {
  try {
    const contacts = await listContacts();
    const id = contacts.length + 1;

    const newContact = { ...body, id };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts;
  } catch (error) {
    throw error;
  }
};
const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const indexContact = findIndexContact(contacts, contactId);

    contacts[indexContact] = {
      ...contacts[indexContact],
      ...body,
    };
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    const contactChange = contacts[indexContact];
    return contactChange;
  } catch (error) {
    throw error;
  }
};

const findIndexContact = (contacts, idContact) => {
  const index = contacts.findIndex(({ id }) => id === idContact);
  if (index === -1) {
    throw new Error();
  }
  return index;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
