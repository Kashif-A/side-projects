const express = require('express')

const app = express();
const path = require('path');
app.use("/", express.static(__dirname + '/'));
app.use('/', express.static(__dirname + '/node_modules/react/'))
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
