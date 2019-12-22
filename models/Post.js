// models/User.js
const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  habitation: {
    type: String,
    required: true
  },
  ancneuf: {
    type: String,
    required: true
  },
  usage: {
    type: String,
    default: true
  },
  situation: {
    type: String,
    default: true
  },
  country: {
    type: String,
    default: true
  },
  city: {
    type: String,
    default: true
  },
  montant: {
    type: Number,
    default: true
  },
  travaux: {
    type: Number,
    default: true
  },
  notaire: {
    type: Number,
    default: true
  },
  budget: {
    type: Number,
    default: true
  },
  email: {
    type: String,
    default: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);
