var express = require('express'),
app = express(),
mysql = require('mysql'),
bodyParser = require('body-parser'),
fs = require('fs'),
dbData = [],
threads,
// playerData;

//  var threads = [
//  {
// 		'id': '1',
// 		title: 'Titel',
// 		text: 'hello'
// },
// {
// 		id: '2',
// 		title: 'Newspaper',
// 		text: "godby"
// 	}, {
// 		id: '3',
// 		title: "godbye hello",
// 		text: "sång från glada i dont knwo"
// 	}
// ];


 var connection = mysql.createConnection({
  host: "db4free.net",
  user: "jarllindquist",
  database: "nodeconnect",
  password: "windows83"
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

connection.query('SELECT * from employeed', function(err, data) {
   if (!err)
   fetchData(data);

   else
     console.log('Error while performing Query.');
});

connection.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});


app.get('/player', function(req,res){
	res.sendFile('public/players.html', { root: __dirname });
})

app.get('/new',function(req,res){
	res.sendFile('public/default.html', { root: __dirname });
})
function fetchData(data){
	for(var i = 0; i < data.length; i++){
		dbData.push(data[i]);

	}
}

app.use(bodyParser.urlencoded({
	extended: true
}));
function read(){

	fs.readFile('res.json', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
   data.replace(null);
   threads = JSON.parse(data.trim());
      // console.log(threads);
  });
}




read();

function appendData(file, data){
	// for(var i = 0; i < data.length; i++){
	// 	if(data[i].id === data[i].id){
	// 		console.log("nej");
	// 	}
	// }

	fs.writeFile(file, data, function (err){
		if(err) throw err;
		
	})
}

// appendData('res.json', data); 

app.get('/send', function (req,res){
	// res.redirect('http://10.123.23.80:3000/dbData');
 	// console.log(req.query.test);
 	// console.log("hostname" + req.hostname  );
 	// console.log("ip" + req.ip);
 	// console.log("path" + req.path);
	// res.sendFile('server.html', { root: __dirname });

	res.sendFile('public/server.html', { root: __dirname });

});



app.get('/threads', function (req,res){
	res.json({threads: threads});

});
app.get('/dbData', function (req,res){
	res.json(dbData);
});



function fetchArticle(id) {

	for (var i = 0; i < threads.length; i++) {
		
		if (threads[i].id === parseInt(id)) {
			return threads[i];

		}
	}

	return null;
}


app.get('/threads/:id', function (req,res){	
	var thread = fetchArticle(req.params.id);
	
	if(typeof thread === 'undefined'){
		res.json({status : " ERROR YOU HAVE DONE WRONG"});
	}
	else{
		
		res.json(thread);
	}
});

app.put('/threads/:id', function (req,res){

	var thread = fetchArticle(req.params.id);

	if(typeof thread === 'undefined' ||typeof thread === 'null'){
		res.json({status : "ERROR YOU HAVE DONE WRONG"});
	}
	else{
		thread.title = req.body.title;
		thread.text = req.body.text;

		data = JSON.stringify(threads);
		appendData('res.json', data);
		
		res.json({status: "OK" });
	}
});

// function isThisSingular(id){
// 	for(var i = 0; i < threads.length; i++){

// 	}
// 	return null
// }

app.post('/threads', function (req,res){
	// var test = isThisSingular(req.params.id);

	threads.push({
		id: parseInt(threads.length +1),
		title: req.body.title,
		text: req.body.text
	});

	data = JSON.stringify(threads);
	appendData('res.json', data);

	res.json({ status: 'CREATED', insertId: threads.length  });
});

app.delete('/threads/:id', function (req,res){
	
	var thread = fetchArticle(req.params.id);
	var deleteThread = thread.id -1;
	if(typeof thread === 'undefined'){
		res.json({status : "err"});
	}
	else{
		
		  threads.splice(deleteThread, 1);
		// res.json({process: "thread"});
		// res.json(threads);
	 	data = JSON.stringify(threads);
			appendData('res.json', data);
}

});






app.use(express.static('public'));



//req.connection.remoteAddress; --> ip address
var server = app.listen(80, function() {
	var port = server.address().port;
	

	console.log("Server started. Listening to connections on port " + port );
});