var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
	var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var newUser;

app.post("/api/new", function(req, res) {
	newUser = req.body;
	console.log(newUser);
	tables.push(newUser);
	res.json(newUser);
});

console.log(newUser);

app.get("/api/", function(req, res){
	res.json(newUser)
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});