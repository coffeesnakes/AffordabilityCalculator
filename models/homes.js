const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  home_id: Number,
  price: Number,
});

module.exports = mongoose.model('Home', homeSchema);
