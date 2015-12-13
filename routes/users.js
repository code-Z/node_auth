var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/save_hotel', function (req, res, next) {
  // if (!req.isAuthenticated())
  //   return res.json({ result: false, message: 'Unauthorized access!', data: null });
  console.log(req.user);
});

module.exports = router;