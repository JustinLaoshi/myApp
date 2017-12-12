'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
// 	//res.send('<html><body><h1>hiiiiiii</h1><div id="root"></div></body></html>');
// 	res.sendFile(path.join(__dirname, '..'));
// })

//


let PORT = 3000;
var server = app.listen(PORT, function () {
    console.log('Node server is running on port ' + PORT);
});


// ITS BECAUSE BUNDLE ISNT IN PUBLIC!!!!!!