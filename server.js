const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB...'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
