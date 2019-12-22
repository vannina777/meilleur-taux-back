require("dotenv").config(); // permet de protéger les variables d'environnement
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // permet de transmettre tout type d'informations
const mongoose = require("mongoose");
const cors = require("cors"); // permet d'autoriser les demandes venant de l'extérieur

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// CONNEXION DB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("connected to my db!")
);

// Import Model
require("./models/Devis");

// Importe la route
const devisRoutes = require("./routes/devis");
// Et active la route
app.use(devisRoutes);

// LISTEN SERVER
app.listen(4000, () => {
  console.log("Server started");
});
