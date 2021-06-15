const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { contactsApi, usersApi } = require('./routes/api');

require('./routes/configs/config-passport');
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/contacts', contactsApi);
app.use('/api/users', usersApi);

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((err, _, res, __) => {
  const { code = 500, message = 'Server error' } = error;

  res.status(500).json({
    status: 'fail',
    code,
    message,
  });
});

module.exports = app;
