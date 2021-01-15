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

router.get('/:id', (req, res) => {
  Home.findOne({ home_id: req.params.id })
    .then((home) => {
      res.status(200).send(home);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post('/', (req, res) => {
  Home.findOneAndUpdate({ home_id: req.body.home_id }, req.body, { upset: true, new: true })
    .then((newHome) => {
      res.status(200).send(newHome);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.put('/:id', (req, res) => {
  Home.findOneAndUpdate({ home_id: req.params.id }, req.body, { new: true })
    .then((updated) => {
      res.status(200).send(updated);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.delete('/:id', (req, res) => {
  Home.deleteOne({ home_id: req.params.id })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
