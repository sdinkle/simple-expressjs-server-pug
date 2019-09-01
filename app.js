// Global node requires
const path = require('path');

// Global third-party requires
const express = require('express');
const bodyParser = require('body-parser');

// Local requires

// Spin up the Express app by calling the express() function to create the app object.
const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');

// Configure the body parser
app.use(bodyParser.urlencoded({extended: false}));

// Expose a static folder for things like css files.
app.use('/static', express.static(path.join(__dirname, 'public')));

// Require route files
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

// Set up routes
app.use(indexRoutes.routes);
app.use(usersRoutes.routes);

// Route favicon requests to an empty 204.
app.get('/favicon.ico', (req, res) => res.status(204).send());

// Set up the 404 route to serve a generic 404 page.
// app.use((req, res) => {
//     res.status(404).render('404', {pageTitle: 'Page Not Found'});
// });

// Listen on port 3000.
app.listen(3000);