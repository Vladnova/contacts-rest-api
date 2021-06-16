const { Contact } = require('../../../models');

const update = async (req, res, next) => {
  const { body } = req;
  const { contactId } = req.params;
  const options = {
    new: true,
  };

  try {
    const result = await Contact.findByIdAndUpdate(contactId, body, options);

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });

    if (!result) {
      return res.status(400).json({
        status: 'Bad request',
        code: 400,
        message: 'Missing field favorite',
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = update;
