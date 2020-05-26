const db = require('../database/dbConfig.js');

module.exports = {
  add,
  archive
};

function add(jobData) {
  return db('job'); //add new job 
}

function archive(job_id) {
  return db('jobs'); //change archived to true
}


