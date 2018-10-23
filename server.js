require('dotenv').config();

const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    playerRouter = require('./routers/playerRouter'),
    { PORT, MONGODB_URI } = process.env;

// Mongo Connection.
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, err => {
    console.log(err || "MongoDB Connected");
});

// Express Middleware
app.use(logger('dev'));
app.use(express.json());
app.use('/api/players', playerRouter)

// Express Port
app.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);
});
