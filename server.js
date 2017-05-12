var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodefs = require('fs');

//express
app.listen(3000, function () {
  console.log('server OK, port 3000!');
});
app.use(express.static(__dirname + '/'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//jade-pug
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/coordinate', function (req, res) {
	res.render('page1', {});
});
