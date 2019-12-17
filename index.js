const express = require("express");
const formidableMiddleware = require("express-formidable");
const mongoose = require("mongoose");

const app = express();
app.use(formidableMiddleware()); // traiter les requêtes POST

// Connexion à la BDD
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", (req, res) => {
  res.json({
    message: "Un message de test"
  });
});

app.post("/login", (req, res) => {
  res.json({
    username: req.fields.username,
    password: req.fields.password
  });
});

app.listen(4000, () => {
  console.log("Server has started");
});
