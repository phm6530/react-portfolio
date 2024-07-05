const express = require('express');
const router = express.Router();
const contactController = require('../Controller/contactController');

// 메일 - 노드메일러해둠
router.post('/', contactController.requestMail);

module.exports = router;
