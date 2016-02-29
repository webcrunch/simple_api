var express = require('express');
var app = express();
app.use(express.static('public'));
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));

data = [];


var get = function(req,res){
	res.json({
		status: "OK",
		resultify: "GET Multiple"
	})
}

var getOne = function(req,res){
var base = parseFloat(req.params.base);
	var exponent = parseFloat(req.params.second);
	var resultat = Math.pow(base, exponent);

	if( isNaN(resultat) || resultat === null || resultat === undefined){
		res.json({status: "Err"});
	}
	else{
	res.json({
		status: "OK",
		result: resultat
	})
	}


}

var post = function(req,res){
	data.push({

		id:data.lenght+1,
		name: req.body.name,
		postning: req.body.postning	
		})
}


var postWithGet = function(req,res){

}
var remove = function(req,res){
	
}

var put = function(req,res){
	
}

var start = function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
})

app.get('/pow/:base/:second', getOne);
app.get('/api/data', get);
// app.get('/', function (req,res){
// 	res.sendFile('index.html');

// });

app.use(express.static('public'));

var server = app.listen(80, start); 
