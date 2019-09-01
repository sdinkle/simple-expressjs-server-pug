// Node, npm, and local requires
const express = require('express');
const indexData = require('./index');

// Set up Express.js Router object
const router = express.Router();

//

// Establish routes
// /users => GET
router.get('/users', (req, res) => {
    // Render the users view
    res.render('users', { users: indexData.users, pageTitle: 'User List' });
});

// Expose data using exports
exports.routes = router;