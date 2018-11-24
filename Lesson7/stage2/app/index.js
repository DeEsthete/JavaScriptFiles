var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade')
var router = require('./router');
app.use('/', router);
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});