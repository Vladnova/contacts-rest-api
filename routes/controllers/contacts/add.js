const createContact = async (req, res, next) => {
  try {
    const contacts = await addContact(req.body);
    res.status(201).send(contacts);
  } catch (error) {
    res.status(400).send({ message: 'missing required name field' });
  }
};
