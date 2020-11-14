const express = require('express')
const livereload = require('livereload')
const path = require('path');
const connectLivereload = require('connect-livereload')

const LRS = livereload.createServer()
LRS.watch(__dirname + '/')

const app = express();
app.use(connectLivereload())
app.use('/', express.static(__dirname + '/'));
// app.use('/', express.static(__dirname + '/node_modules/react/'))
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
