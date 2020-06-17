//Server Setup
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticationRequired = require('../utils/OktaAuth');

//Routes
const UserRouter = require('../routes/Users');
const JobsRouter = require('../routes/Jobs');
const DSRouter = require('../routes/DataScience');

//Express
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routes
server.use('/api/jobs', authenticationRequired, JobsRouter);
server.use('/api/users', authenticationRequired, UserRouter);
server.use('/api/ds', DSRouter);

//Catch traffic
server.get('/', (req, res) => { 
  res.status(200).json({ message: 'hey! you\'ve reached the \'/\' endpoint.'}); 
});
server.get('/api', (req, res) => {
  res.status(200).json({ message: 'API is ready!'}); 
});

module.exports = server;
