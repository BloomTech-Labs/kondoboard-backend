//Server Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticationRequired = require('../utils/OktaAuth');

//Routes
const UserRouter = require('../routes/Users');
const JobsRouter = require('../routes/Jobs');

//Express
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routes
server.use('/api/jobs', JobsRouter);
server.use('/api/users', UserRouter);

//Catch traffic
server.get('/', (req, res) => res.send('Server is active'));
server.get('/api/', (req, res) => res.send('API is ready'));

module.exports = server;
