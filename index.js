const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, "public")));

// require("./config/sessions")(app);

var routes_setter = require("./config/routes.js");
routes_setter(app);

const port = process.env.PORT || 8000;
app.listen(port);

console.log("App is listening on port " + port);
