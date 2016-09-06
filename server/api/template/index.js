'use strict';

var express = require('express');
var controller = require('./template.controller');

var router = new express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;
