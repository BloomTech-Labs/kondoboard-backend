//Server Setup
const express = require('express');
//Server Setup
const cors = require('cors');
const helmet = require('helmet');

//Routes
const UserRouter = require('../routes/Users');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', UserRouter);

//Root Route
server.get('/', (req, res) => res.send('Server is active'));

module.exports = server;
