var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.get('/', function(req,res){
	res.status(404);
})

//req.connection.remoteAddress; --> ip address
var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Server started. Listening to connections on port " + port );
})

