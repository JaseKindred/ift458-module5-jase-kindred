// Jase Kindred - IFT 458
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Register the logger middleware before the routes so it runs on every request
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello from the middleware lab!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
