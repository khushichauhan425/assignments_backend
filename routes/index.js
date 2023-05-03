var express = require('express');
var router = express.Router();
const wikijs = require('wikijs').default;
/* GET home page. */
router.get('/about', function(req, res, next) {
  const query = req.query.q;
  return wikijs().page(query).then(page => {
    page.summary().then(summary => {
      res.status(200).json({ summary });
    }).catch(err => res.status(500).json({ err }));
  }).catch(err => res.status(500).json({ err }));
});

module.exports = router;
