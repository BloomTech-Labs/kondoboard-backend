const db = require('../database/dbConfig.js');

module.exports = {
  getJobById,
  updateJob,
  addJob,
  saveJob,
  getJobByDsId
};

function getJobById(id) {
  return db('jobs').where({ id });
}

async function addJob(jobData) {
  const [id] = await db('jobs').insert(jobData, 'id');
  const newJob = await getJobById(id);
  return newJob;
}

function updateJob(id, changes) {
  const updatedJob = db('jobs').where({ id }).update(changes);
  return updatedJob;
}

async function saveJob(data) {
  const userJob = await db('users_jobs').insert(data);
  return userJob;
}

function getJobByDsId(ds_id) {
  return db('jobs').where({ ds_id });
}
