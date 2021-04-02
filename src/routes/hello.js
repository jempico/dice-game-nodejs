const express = require('express');
const router = express.Router();
const hello = require('../controllers/hello');

router.get('/', hello.hello)

module.exports= router;