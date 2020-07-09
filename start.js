const app = require('./server');
const dbConnect = require('./db');
const port = process.env.PORT || 3000;

dbConnect();

app.listen(port, () => {
  console.log(`Process running on port ${port}!`);
});
