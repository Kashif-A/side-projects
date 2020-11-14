/* eslint-disable no-undef */
/* eslint-disable no-empty */
const express = require('express')
const livereload = require('livereload')
const path = require('path');
const connectLivereload = require('connect-livereload')
const fs = require('fs-extra')
const fw = require('filewatcher')

const watcher = fw()

const reactDomFile = __dirname + '/react-dom.development.js'
const reactDomTargetFile = __dirname + '/node_modules/react-dom/umd/react-dom.development.js'
watcher.add(reactDomFile)
watcher.on('change', function copyFiles() {
  try {
    fs.copySync(reactDomFile, reactDomTargetFile, { recursive: true })
    process.stdout.write(`${reactDomFile} ----> ${reactDomTargetFile} ${chalk.green('success')}\n`)
  }
  catch (e) { }
})

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
