var mongoose = require('mongoose');;

var userSchema = new mongoose.Schema({
  facebookId: String,
  name: String,
  email: String,
  token: String,
  profilePic: String,
  hotels: { type: mongoose.Schema.Types.Mixed, default: [] }
});

module.exports = mongoose.model('User', userSchema);




/**
hosting the hackathon template on aws (push the code on github and share with parv)
testing POC for chat on the web
test APIs for travelfusion, agoda, hostelworld and booking.com
*/