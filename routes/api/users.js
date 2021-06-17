const express = require('express');
const ctrl = require('../controllers/users');
const router = express.Router();
const validate = require('../../middleware/validates');
const { auth, upload } = require('../../middleware/auth');

router.post('/signup', validate.loginAndSignup, ctrl.signup);

router.post('/login', validate.loginAndSignup, ctrl.login);

router.get('/current', auth, ctrl.current);

router.post('/logout', auth, ctrl.logout);

router.patch('/avatar', auth, upload.single('avatar'), ctrl.avatar);

router.get("/verify/:verificationToken", ctrl.verifyToken);

// router.post('/verify', validate.emailVerify, ctrl.verify);


module.exports = router;
