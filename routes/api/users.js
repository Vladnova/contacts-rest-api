const express = require('express');
const ctrl = require('../controllers/users');
const router = express.Router();
const validate = require('../../middleware/validates');
const { auth } = require('../../middleware/auth');

router.post('/signup', express.json(), validate.login, ctrl.signup);

router.post('/login', express.json(), validate.login, ctrl.login);

router.get('/current', auth, ctrl.current);

router.get('/logout', auth, ctrl.logout);

module.exports = router;
