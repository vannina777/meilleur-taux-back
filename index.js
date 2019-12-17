const express = require("express");
const app = express();
const formidable = require("formidable");
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.get("/hola", (req, res) => {
  res.send("ola");
});

app.listen(4000, () => {
  console.log("Server has started");
});
