var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

// Serve up static files
app.use(express.static(__dirname + '/web'));

// Serve up routes
// app.get('*', function (req, res) {
// 	res.sendFile(path.join(__dirname + '/web/index.html'));
// });

// Start Server
app.listen(port, function() {
	console.log('Server - Running on port: ' + port);
});