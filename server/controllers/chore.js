"use strict";

const Chore = require('../models/chore');
const User = require('../models/user');

exports.getChores = function (req, res, next) {
  Chore.find({ userId: req.userId })
};