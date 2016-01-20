var express = require('express');
var app = express();
app.use(express.static('public'));


app.get('/spotify', function(req,res){

 	res.sendFile('../default.html', { root: __dirname });
});



var server = app.listen(3000, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
})
