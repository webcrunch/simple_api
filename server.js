var express = require('express');
var app = express();
app.use(express.static('public'));
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));


var get = function(req,res){

}
var post = function(req,res){
	
}

var remove = function(req,res){
	
}

var put = function(req,res){
	
}



app.use(express.static('public'));
app.use(express.static('images'));
var server = app.listen(3000, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
})
