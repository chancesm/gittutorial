var Q = require('q');
var Quotes = require('../model/quote')

exports.getData = function (req){
	return Quotes.all({raw:true})
	.then(function (results){
		console.log("RESULTS:",results);
		return {
			Quotes: results
		}
	}).catch(function (err){
		console.error('getData() error', err)
	})
}