//Server Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const passport = require('../utils/Passport');

//Routes
const UserRouter = require('../routes/Users');

const server = express();

server.use(passport.initialize());
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', UserRouter);

//Root Route
server.get('/', (req, res) => res.send('Server is active'));

server.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('in post');
});

module.exports = server;
