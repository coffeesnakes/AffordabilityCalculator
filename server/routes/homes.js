/* eslint-disable no-unused-vars */
const express = require('express');
const Home = require('../../models/homes.js');

const router = express.Router();

router.get('/', (req, res) => {
  Home.find()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
