const mongoose = require("mongoose");

const Devis = mongoose.model("Devis", {
  habitation: {
    type: String,
    default: ""
  },
  construction: {
    type: String,
    default: ""
  },
  usage: {
    type: String,
    default: ""
  },
  situation: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  amount: {
    type: Number
  },
  build: {
    type: Number
  },
  notary: {
    type: Number
  },
  totalAMount: {
    type: Number
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  }
});

module.exports = Devis;
