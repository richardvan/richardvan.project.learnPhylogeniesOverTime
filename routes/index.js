var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expdress HE3LLo 3000 3' });
});

module.exports = router;
