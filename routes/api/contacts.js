const express = require('express');
const router = express.Router();
const validate = require('../validates');
const ctrl = require('../controllers/contacts');

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getOne);

router.post('/', validate.create, ctrl.add);

router.delete('/:contactId', ctrl.remove);

router.patch('/:contactId/favorite', validate.update, ctrl.update);

module.exports = router;
