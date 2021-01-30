const mongoose = require('mongoose');

const offeringSchema = new mongoose.Schema({
  terms: String,
  rate: Number,
  apr: Number,
  fees: Number,
});

const reviewSchema = new mongoose.Schema({
  rating: Number,
});

const mortgageSchema = new mongoose.Schema({
  name: String,
  mortgage_id: Number,
  favorite: Boolean,
  offerings: [offeringSchema],
  reviews: [reviewSchema],
});

const Mortgage = mongoose.model('Mortgage', mortgageSchema);

module.exports = Mortgage;
