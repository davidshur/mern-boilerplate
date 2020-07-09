const app = require('./server');
const PORT = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
