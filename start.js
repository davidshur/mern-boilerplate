const mongoose = require('mongoose');
const app = require('./server');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB...'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
