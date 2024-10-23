const router = require('express').Router();
const controller = require('../apps/controller/auth.controller');

router.post('/', controller.login);

module.exports = router;