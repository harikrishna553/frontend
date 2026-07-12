// app.js (CommonJS)
const express = require('express');
const { format } = require('date-fns');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const now = new Date();
  const formatted = format(now, 'EEEE, MMMM do, yyyy HH:mm:ss'); // e.g. "Friday, September 12th, 2025 13:05:02"
  res.send(`<h1>Hello!</h1><p>Server time: ${formatted}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

