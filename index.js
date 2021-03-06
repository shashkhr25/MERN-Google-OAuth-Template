const express = require('express');
const mongoose= require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI,  { useNewUrlParser: true });

const app=express();
app.use(
    cookieSession({
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days passed as milliseconds.
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000
app.listen(PORT);