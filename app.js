const express = require("express");
const parser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(parser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home")
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});