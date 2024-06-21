const express = require("express");
const app = express();
const loadToken = require("./modules/loadToken");
const collectGoldenDuck = require("./scripts/collectGoldenDuck");
var cron = require("node-cron");

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
cron.schedule("* * * * *", () => {
  collectGoldenDuck(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1MTE5OSwidGltZXN0YW1wIjoxNzE4OTY4ODIwOTkxLCJ0eXBlIjoxLCJpYXQiOjE3MTg5Njg4MjAsImV4cCI6MTcxOTU3MzYyMH0.U4VtIuA0piy7uFIFa5FkhJbFToqUQ1P5IXQszEfDmQA"
  );
});
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
