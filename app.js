const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const mainRoutes = require('./routes/index');

// Use routes
app.use('/', mainRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});