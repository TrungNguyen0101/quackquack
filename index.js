const express = require("express");
const app = express();
const loadToken = require("./modules/loadToken");
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1MTE5OSwidGltZXN0YW1wIjoxNzE4OTY4ODIwOTkxLCJ0eXBlIjoxLCJpYXQiOjE3MTg5Njg4MjAsImV4cCI6MTcxOTU3MzYyMH0.U4VtIuA0piy7uFIFa5FkhJbFToqUQ1P5IXQszEfDmQA";
const collectGoldenDuck = require("./scripts/collectGoldenDuck");

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
  collectGoldenDuck(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1MTE5OSwidGltZXN0YW1wIjoxNzE4OTY4ODIwOTkxLCJ0eXBlIjoxLCJpYXQiOjE3MTg5Njg4MjAsImV4cCI6MTcxOTU3MzYyMH0.U4VtIuA0piy7uFIFa5FkhJbFToqUQ1P5IXQszEfDmQA"
  );
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
