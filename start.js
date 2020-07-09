const app = require('./server');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

require('dotenv').config();
const db = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

app.use(routes);

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB...'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
