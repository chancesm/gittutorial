var express = require('express');
var engine = require('ejs-locals');
var app = express();

var control = require('./controller/control');
var port = 3000;


app.engine('ejs', engine); //use ejs as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('assets')); // Allows access to inner folders by appending inner folder to hostURL

app.get('/', function (req, res){
	control.getData(req).then(function (quoteData){
		//console.log(quoteData);
		res.render('index', quoteData);
	})
});

var server = app.listen(port,function(err){
    console.log('running server on port ' + port);
});