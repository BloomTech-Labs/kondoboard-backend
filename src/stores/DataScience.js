const db = require('../database/dbConfig');

module.exports = {
  getAllUsers,
  getUserSavedJobs,
  getUserIrrelevantJobs,
};

async function getAllUsers() {
  //const users = await db.select('id', 'user_track', 'skills', 'locations', 'remote').from('users');
  const users = await db.select('*').from('users');
  return users;
}

async function getUserSavedJobs(user_id) {
  const jobs = await _getUserJobs(user_id, 'favorite');
  return jobs;
}

async function getUserIrrelevantJobs(user_id) {
  const jobs = await _getUserJobs(user_id, 'irrelevant');
  return jobs;
}

async function _getUserJobs(user_id, type) {
  const jobs = await db.select('jobs.*')
    .from('users_jobs')
    .join('jobs', 'users_jobs.jobs_id', 'jobs.id')
    .where('users_jobs.user_id', user_id)
    .andWhere('users_jobs.status', type);
  return jobs;
}
