'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = new express.Router();

router.get('/', controller.index);

module.exports = router;