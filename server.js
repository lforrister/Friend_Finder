var express = require("express");

var bodyParser = require("body-parser");

var app = express();

require('./app/routing/htmlRoutes.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("assets/css"));

var PORT = process.env.PORT || 3000;

app.listen(3000, function() {
	console.log("listing on 3000");
});
