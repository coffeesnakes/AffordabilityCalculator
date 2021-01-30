const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3003;
const homes = require('./routes/homes');
const mortgage = require('./routes/mortgage');

const url = process.env.CONNECTIONSTRING || 'mongodb://localhost/affordability';
// db
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connecting to MongoDB ..'));

// parse
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// routing
app.use('/homes', homes);
app.use('/mortgage', mortgage);

app.listen(port, () => console.log(`connected on ${port}`));
