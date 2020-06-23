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
  getJobColumns,
  updateJobColumn,
  updateColumn,
  getJobsInColumns,
};

async function getJobById(id) {
  const job = await db('jobs').where({ id });
  return job;
}

async function addJob(jobData) {
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
  const column = await db('columns').where({ user_id }).orderBy('location','asc');
  return column;
}

async function deleteColumn(id) {
  const deleted = await db('columns').where({ id }).del();
  return deleted;
}

async function getJobColumns(user_id) {
  const jobColumnInfo = await db('job_column')
    .select('job_column.*')
    .from('users_jobs')
    .join('job_column', 'users_jobs.id', 'job_column.users_jobs_id')
    .where('users_jobs.user_id', user_id);
  return jobColumnInfo;
}

async function newJobColumn(data) {
  const newJobColumn = await db('job_column').insert( data );
  return newJobColumn;
}

async function updateJobColumn(users_jobs_id, columns_id) {
  console.log("id -", users_jobs_id);
  console.log("column -", columns_id);
  const updateJobColumn = await db('job_column').where({ users_jobs_id }).update({ columns_id });
  return updateJobColumn;
}

async function updateColumn(id, changes) {
  const updateColumn = await db('columns').where({ id }).update(changes);
  return updateColumn;
}

async function getJobByDsId(ds_id) {
  const job = await db('jobs').where({ ds_id });
  return job;
}

async function getJobsInColumns(columns_id) {
  const jobs = await db('job_column')
                      .select('users_jobs_id as id')
                      .where({ columns_id });
  return jobs;
}