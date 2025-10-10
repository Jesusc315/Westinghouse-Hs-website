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
// Academics route
app.get(['/academics', '/westinghousehs.org/academics'], (req, res) => {
  res.render('academics');
})
app.get(['/about', '/westinghousehs.org/about'], (req, res) => {
  res.render('about');
});
app.get(['/admissions', '/westinghousehs.org/admissions'], (req, res) => {
  res.render('admissions');
});
app.get(['/programs', '/westinghousehs.org/programs'], (req, res) => {
  res.render('programs');
});
app.get(['/contact', '/westinghousehs.org/contact'], (req, res) => {
  res.render('contact');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://westinghousehs.org:${PORT}`);
});