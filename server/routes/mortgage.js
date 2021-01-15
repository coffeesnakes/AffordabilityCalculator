/* eslint-disable no-unused-vars */
const express = require('express');
const Home = require('../../models/homes.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello friend inside of mortgage route.');
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
