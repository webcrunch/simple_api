var express = require('express');
var app = express();
app.use(express.static('public'));

var get = function(req,res){

}
var post = function(req,res){
	
}
var delete = function(req,res){
	
}
var put = function(req,res){
	
}


var server = app.listen(3000, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
})
