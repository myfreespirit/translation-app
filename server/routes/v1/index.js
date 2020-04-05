const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'Greetings from the API v1 endpoint.' });
});

module.exports = router;
