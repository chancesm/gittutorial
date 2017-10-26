var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'user', 'password');

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;