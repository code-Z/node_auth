var mongoose = require('mongoose');;

var userSchema = new mongoose.Schema({
  facebookId: String,
  name: String,
  email: String,
  token: String,
  profilePic: String
});

module.exports = mongoose.model('User', userSchema);