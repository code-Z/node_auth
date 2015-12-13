var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save_hotel', function (req, res, next) {
  //save the hotel entry along with the user record
})

module.exports = router;