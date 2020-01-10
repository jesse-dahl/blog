const express = require("express");
const parser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});