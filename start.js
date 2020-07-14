const app = require('./server');
const db = require('./db');

const PORT = process.env.PORT || 5000;

db.connect();

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
