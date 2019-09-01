// Node, npm, and local requires
const express = require('express');

// Set up Express.js Router object
const router = express.Router();

// Model variables
const userList = [];

// Establish routes
// / => GET
router.get('/', (req, res) => {
    // Render the index view
    res.render('index', { pageTitle: 'Add User' });
});

// / => POST
router.post('/', (req, res) => {
    // Push the submitted username into the userList
    userList.push(req.body.username);

    // Redirect to the users page
    res.redirect('/users');
});

// Expose data using exports
exports.routes = router;
exports.users = userList;