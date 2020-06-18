const db = require('../database/dbConfig.js');

module.exports = {
  getById,
  getUserByEmail,
  insert,
  update,
  remove,
  getUserJobs,
  getUserAppliedJobs,
  addTag,
  getTags,
  updateTag,
  removeTag,
  getJobTags,
  updateJobTag,
  getUserJob,
  updateSavedJob,
};

// ~~~~~~~~~~ Users ~~~~~~~~~

async function getById(id) {
  const user = await db('users').where({ id });
  return user;
}

async function getUserByEmail(email) {
  const user = await db('users').where({ email });
  return user;
}

async function insert(user) {
  const [id] = await db('users').insert(user, 'id');
  const newUser = await getById(id);
  return newUser;
}

async function update(id, changes) {
  const updatedUser = await db('users').where({ id }).update(changes);
  return updatedUser;
}

async function remove(id) {
  const res = await db('users').where({ id }).del();
  return res;
}

async function getUserJobs(user_id, type) {
  const userJobs = await db('jobs.*, users_jobs.status')
    .from('users_jobs')
    .join('jobs', 'users_jobs.jobs_id', 'jobs.id')
    .where('users_jobs.user_id', user_id)
    .andWhere('users_jobs.status', type);
  return userJobs;
}

async function getUserAppliedJobs(user_id) {
  const userJobs = await db('jobs.*, users_jobs.status, job_column.columns_id')
    .from('users_jobs')
    .join('jobs', 'users_jobs.jobs_id', 'jobs.id')
    .join('job_column', 'users_jobs.id', 'job_column.users_jobs_id')
    .where('users_jobs.user_id', user_id)
    .andWhere('users_jobs.applied', true);
  return userJobs;
}

async function getTagById(id) {
  const tag = await db('user_tags').where({ id });
  return tag;
}

async function getTags(user_id) {
  const tags = await db('user_tags').where({ user_id });
  return tags;
}

async function addTag(newTag) {
  const [id] = await db('user_tags').insert(newTag, 'id');
  const addedTag = await getTagById(id);
  return addedTag;
}

async function updateTag(id, changes) {
  const updatedTag = await db('users_jobs').where('id', id).update('tags', changes);
  return updatedTag;
}

async function removeTag(id) {
  const res = await db('user_tags').where({ id }).del();
  return res;
}

async function getJobTags(id) {
  const tags = await db('users_jobs').where({ id });
  return tags;
}

async function updateJobTag(id, updatedTags) {
  const newTag = await db('users_jobs').where({ id }).update('tags', updatedTags);
  return newTag;
}

async function getUserJob(id) {
  const savedJob = await db('users_jobs').where({ id });
  return savedJob;
}

async function updateSavedJob(id, changes) {
  const updateColumn = await db('users_jobs').where({ id }).update(changes);
  return updateColumn;
}
