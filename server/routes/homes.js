const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello friend in HOMES')
})

module.exports = router;
