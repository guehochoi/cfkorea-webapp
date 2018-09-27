const express = require('express');
const app = express(); 
var path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/apps/browser/home/index.html'));
});

app.use('/css/', express.static(path.join(__dirname + '/apps/browser/home')));

app.use('/lib/', express.static(path.join(__dirname + '/node_modules')));

app.use('/assets/', express.static(path.join(__dirname + '/public/assets')));

app.listen(8000, () => {
	console.log('Example app listening on port 8000!');
});
