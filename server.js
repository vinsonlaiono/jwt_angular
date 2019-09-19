// Import Modules
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

const jwt = require('jsonwebtoken');
// const randtoken = require('rand-token');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const cors = require('cors');

const refreshTokens = {};
const SECRET = 'VERY_SECRET_KEY!';
const passportOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

passport.use(new JwtStrategy(passportOpts, function (jwtPayload, done) {
    const expirationDate = new Date(jwtPayload.exp * 1000);
    if(expirationDate < new Date()) {
        return done(null, false);
    }
    done(null, jwtPayload);
}))

passport.serializeUser(function (user, done) {
    done(null, user.username)
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Port Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
// Points the express server to serve the Angular application
app.use(express.static(__dirname + '/public/dist/public'));
// Mogoose Models
require('./server/models/user');
// Routes
require('./server/config/routes')(app);