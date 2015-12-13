var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save_hotel', function (req, res, next) {
  if (!req.isAuthenticated())
    return res.json({ result: false, message: 'Unauthorized access!', data: null });
  var user = req.user;
  user.hotels.push(req.body.hotel);
  user.save(function (err, savedRecord) {
    if (err)
      return res.json({ result: false, message: 'Error while saving user', data: null });
    else
      return res.json({ result: true, message: 'Hotel record saved successfully!', data: savedRecord.hotels });
  });
});

router.get('/saved_hotels', function (req, res, next) {
  if (!req.isAuthenticated())
    return res.json({ result: false, message: 'Unauthorized access!', data: null });
  else
    return res.json({ result: true, message: '', data: req.user.hotels });
});

module.exports = router;