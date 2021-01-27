/* eslint-disable func-names */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
const Home = require('../models/homes.js');
const Mortgage = require('../models/mortgage.js');

// db
const URL = process.env.CONNECTIONSTRING || 'mongodb://localhost/affordability';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connecting to db..'));

// seed
for (let i = 0; i < 100; i += 1) {
  const price = faker.finance.amount(250000, 2000000, 0);
  const homeID = i;
  Home.create({
    home_id: homeID,
    price,
  });
}

const randomOffering = function () {
  const offeringPossibilities = ['15 Year Fixed', '30 Year Fixed', '5/1 Arm'];
  const randomIdx = Math.floor(Math.random() * offeringPossibilities.length);
  return offeringPossibilities[randomIdx];
};

const generateMortgage = function () {
  const offerings = [];

  const randumb = Math.floor(Math.random() * 10);
  for (let i = 0; i < randumb; i += 1) {
    offerings.push({
      terms: randomOffering(),
      rate: faker.finance.amount(2, 5, 3),
      apr: faker.finance.amount(2, 5, 3),
      fees: faker.finance.amount(0, 550, 0),
    });
  }
  return offerings;
};

const genReviews = function () {
  const reviews = [];
  const randumb = Math.floor(Math.random() * 100);
  for (let i = 0; i < randumb; i += 1) {
    reviews.push({
      rating: faker.finance.amount(0, 5, 0),
    });
  }
  return reviews;
};

for (let i = 0; i < 10; i += 1) {
  const data = {
    name: faker.company.companyName(),
    favorite: false,
    offerings: generateMortgage(),
    reviews: genReviews(),
  };
  Mortgage.create(data)
    .catch((err) => console.log(err));
}
