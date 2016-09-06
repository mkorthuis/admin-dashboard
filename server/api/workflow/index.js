'use strict';

var express = require('express');
var controller = require('./workflow.controller');

var router = new express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;
