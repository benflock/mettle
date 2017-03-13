const express = require('express'),
  router = express.Router(),
  query = require('../queries');

  /* GET */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;
