/* eslint-disable no-unused-vars */
const express = require('express');
const Mortgage = require('../../models/mortgage.js');

const router = express.Router();

router.get('/', (req, res) => {
  Mortgage.find()
    .then((homes) => {
      res.status(200).send(homes);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.get('/:id', (req, res) => {
  Mortgage.findOne({ _id: req.params.id })
    .then((mortgage) => {
      res.status(200).send(mortgage);
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
