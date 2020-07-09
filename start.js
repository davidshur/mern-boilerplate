const app = require('./server');
const dbConnect = require('./db');
const PORT = process.env.PORT || 5000;

dbConnect();

app.listen(port, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
