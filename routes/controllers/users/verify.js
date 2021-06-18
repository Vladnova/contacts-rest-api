const { users: services } = require('../../../services');
const sgMail = require('@sendgrid/mail');
const verificationEmail = require('../../../middleware/verificationEmail');

const verify = async (req, res, next) => {
  const { body } = req;

  try {
    const user = await services.getOne(body);

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }

    const { verify, email, verifyToken } = user;

    if (verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed',
      });
    }

    const mail = verificationEmail(verifyToken,email );

    sgMail
      .send(mail)
      .then(() => console.log('email send'))
      .catch(error => console.log(error.message));

    res.json({
      status: 'success',
      code: 200,
      message: 'Verification email sent',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verify;