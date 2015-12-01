var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));
router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect : '/', failureRedirect : '/' }));
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;