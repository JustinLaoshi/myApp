var express = require('express');
var app = express();

// define routes here..


app.get('/', (req, res) => {
	res.send('<html><body><h1>hiiiiiii</h1></body></html>');
})

//


let PORT = 3000;
var server = app.listen(PORT, function () {
    console.log('Node server is running on port ' + PORT);
});