'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
	res.send('<html><body><h1>hiiiiiii</h1><div id="root"></div></body></html>');
	res.sendFile('index.html');
})

//


let PORT = 3000;
var server = app.listen(PORT, function () {
    console.log('Node server is running on port ' + PORT);
});