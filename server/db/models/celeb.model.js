const Sequelize = require('sequelize');
const db = require('../index');

const Celeb = db.define('celeb', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	fullPhoto: {
		type: Sequelize.STRING,
		allowNull: false
	},
	chinCropPhoto: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Celeb;
