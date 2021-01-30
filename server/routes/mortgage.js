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
  Mortgage.findOne({ mortgage_id: req.params.id })
    .then((mortgage) => {
      res.status(200).send(mortgage);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post('/', (req, res) => {
  Mortgage.findOneAndUpdate({ name: req.body.name }, req.body, { upsert: true, new: true })
    .then((newMortgage) => {
      res.status(200).send(newMortgage);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.put('/:id', (req, res) => {
  Mortgage.findOneAndUpdate({ name: req.body.name }, req.body, { upsert: true, new: true })
    .then((newMortgage) => {
      res.status(200).send(newMortgage);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.delete('/:id', (req, res) => {
  Mortgage.deleteOne({ _id: req.params.id })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
