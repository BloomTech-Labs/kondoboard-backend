const db = require('../database/dbConfig.js');

module.exports = {
  getJobById,
  updateJob,
  addJob,
  saveJob,
  getJobByDsId
};

async function getJobById(id) {
  const job = await db('jobs').where({ id });
  return job;
}

async function addJob(jobData) {
  console.log(jobData);
  const [id] = await db('jobs').insert(jobData, 'id');
  const newJob = await getJobById(id);
  return newJob;
}

async function updateJob(id, changes) {
  const updatedJob = await db('jobs').where({ id }).update(changes);
  return updatedJob;
}

async function saveJob(data) {
  const userJob = await db('users_jobs').insert(data);
  return userJob;
}

async function getJobByDsId(ds_id) {
  const job = await db('jobs').where({ ds_id });
  return job;
}
