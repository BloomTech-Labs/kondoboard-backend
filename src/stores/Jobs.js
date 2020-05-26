const db = require('../database/dbConfig.js');

module.exports = {
  getJobById,
  updateJob,
  addJob,
  archive
};

function getJobById(id) {
  return db('jobs').where({ id });
}

async function addJob(jobData) {
  const id = await db('jobs').insert(jobData, 'id')
  return getJobById(id); //add new job 
}

function archive(job_id) {
  return db('jobs'); //change archived to true
}

function updateJob(id, changes) {
  const updatedJob = db('jobs').where({ id }).update(changes);
  return updatedJob;
}


