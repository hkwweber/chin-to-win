'use strict'
const apiRouter = require('express').Router();
const db = require('../db/models')
const celebRouter = require('./celeb.route');

apiRouter.use('/celebs', celebRouter);

module.exports = apiRouter;

