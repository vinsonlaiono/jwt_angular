// Import Modules
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
// Port Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
// Points the express server to serve the Angular application
app.use(express.static(__dirname + '/public/dist/public'));
// Mogoose Models
require('./server/models/user');
// Routes
require('./server/config/routes')(app);