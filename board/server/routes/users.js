var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/join", function (req, res) {
  var body = req.body
  console.log(body)
  User.create(body).then(result => {
    res.json({
      result: "ok"
    })
  })
})

module.exports = router;
