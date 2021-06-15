const current = (req, res, next) => {
  const { email, subscription } = req.user;

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: {
        email,
        subscription,
      },
    },
  });
};

module.exports = current;
