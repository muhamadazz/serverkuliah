const express = require('express');
const app = express();
const PORT = 8000;

const motoGP = require('./motogp');
const {filterByName, filterByWinningCountry} = require('./util');

app.get('/', (req, res) => {
  res.send(JSON.stringify(motoGP));
});

app.get('/country', (req, res) => {
  const response = filterByWinningCountry(motoGP);

  res.send(JSON.stringify(response));
});

app.get('/name', (req, res) => {
  const response = filterByName(motoGP);

  res.send(JSON.stringify(response));
});

// Define an error handling middleware for undefined routes
app.use((req, res, next) => {
  const error = new Error('Bad Request');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`📶 SERVER IS RUNNING AT PORT ${PORT}`);
});
