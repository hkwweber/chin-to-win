'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');

console.log(chalk.yellow("Opening database connection"));

const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/chin-to-win`

const db = new Sequelize(dbUrl, {
  logging: false
});

module.exports = db;

