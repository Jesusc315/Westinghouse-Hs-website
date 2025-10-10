const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get(['/', '/westinghousehs.org'], (req, res) => {
  res.render('home');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://westinghousehs.org:${PORT}`);
});