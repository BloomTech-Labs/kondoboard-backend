const db = require('../database/dbConfig.js');

module.exports = {
  getJobById,
  updateJob,
  addJob,
  saveJob,
  getJobByDsId,
  newColumn,
  getColumn,
  deleteColumn,
  newJobColumn,
  updateJobColumn,
  updateColumn,
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

async function newColumn(data) {
  const newColumn = await db('columns').insert(data);
  return newColumn;
}

async function getColumn(user_id) {
  const column = await db('columns').where({ user_id })
  return column;
}

async function deleteColumn(id) {
  const deleted = await db('columns').where({ id }).del()
  return deleted;
}

async function newJobColumn(data) {
  const newJobColumn = await db('job_column').insert( data )
  return newJobColumn;
}

async function updateJobColumn(id, changes) {
  const updateJobColumn = await db('job_column').where({ id }).update(changes);
  return updateJobColumn;
}

async function updateColumn(id, changes) {
  const updateColumn = await db('job_column').where({ id }).update(changes);
  return updateColumn;
}

async function getJobByDsId(ds_id) {
  const job = await db('jobs').where({ ds_id });
  return job;
}
