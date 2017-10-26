var	db = require('../db');
var sequelize = db.sequelize;
var Sequelize = db.Sequelize;

var Quotes = sequelize.define('quotes', {
	ID: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	Author: Sequelize.TEXT,
	Quote: Sequelize.TEXT
}, {
	timestamps: false 
  })

module.exports = Quotes; //this exports the model from this page to whatever page imports it