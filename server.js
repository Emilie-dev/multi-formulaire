var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodefs = require('fs');
var validator = require('validator');

//express
app.listen(3000, function () {
  console.log('server OK, port 3000!');
});
app.use(express.static(__dirname + '/'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//jade
app.set('views', './views');
app.set('view engine', 'jade');

function checkcoordinate(coordinate) {
	var error = {};

	if (!validator.isAlpha(page1.first_name)) {
		error.first_name = "Pas de caractéres spéciaux!";
	}
	if (!validator.last_name(page1.last_name)) {
		error.last_name = "Pas de caractéres spéciaux!";
	}
	if (validator.isEmpty(page1.first_name)) {
		error.first_name = "Champs obligatoire!";
	}
	if (validator.isEmpty(page1.last_name)) {
		error.last_name = "Champs obligatoire!";
	}
	if (validator.isEmpty(page1.age)) {
		error.age = "Champs obligatoire!";
	}
	if (validator.isEmpty(page1.address)) {
		error.address = "Champs obligatoire!";
	}
	return error;
};

app.get('/coordinate', function (req, res) {
	if(page1.isEmpty(req.body)) {
		res.render('page2', {});
	} else {
		res.render('page1', {
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			age: req.body.age,
			address: req.body.address,
			error: checkcoordinate(req.body),
		})
	}
});
