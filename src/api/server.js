//Server Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticationRequired = require('../utils/OktaAuth');

//Routes
const UserRouter = require('../routes/Users');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', UserRouter);

//Root Route
server.get('/', (req, res) => res.send('Server is active'));

server.post('/', authenticationRequired, (req, res) => {
  console.log('in post');
});

module.exports = server;
