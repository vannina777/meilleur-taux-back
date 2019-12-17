// les Models permettent d'ajouter des données à la BDD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  isActivated: {
    type: Boolean,
    default: false
  }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
