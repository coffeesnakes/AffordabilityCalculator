const express = require('express');
const Home = require('../../models/homes.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello friend inside of mortgage route.');
});

module.exports = router;
