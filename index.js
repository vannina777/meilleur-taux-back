require("dotenv").config(); // permet de protéger les variables d'environnement
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // permet de transmettre tout type d'informations
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// CONNEXION DB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("connected to my db!")
);

// IMPORT ROUTES
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute); // permet de remplacer '/' par posts dans routes

app.get("/", (req, res) => {
  res.send("We are at home");
});

// LISTEN SERVER
app.listen(4000);
