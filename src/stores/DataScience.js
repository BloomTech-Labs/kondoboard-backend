const db = require('../database/dbConfig');

module.exports = {
  getAllUsers,
  getSingleUser,
  getUserSavedJobs,
  getUserIrrelevantJobs,
};

async function getAllUsers() {
  //const users = await db.select('id', 'user_track', 'skills', 'locations', 'remote').from('users');
  const users = await db.select('*').from('users');
  return users;
}

async function getSingleUser(userId) {
  //const user = await db.select('id', 'user_track', 'skills', 'locations', 'remote').from('users').where("id", userId);
  const user = await db.select('*').from('users').where('id', userId);
  return user;
}

async function getUserSavedJobs(userId) {
  const jobs = await _getUserJobs(userId, 'favorite');
  return jobs;
}

async function getUserIrrelevantJobs(userId) {
  const jobs = await _getUserJobs(userId, 'irrelevant');
  return jobs;
}

async function _getUserJobs(userId, type) {
  const jobs = await db.select('jobs.*')
    .from('users_jobs')
    .join('jobs', 'users_jobs.jobs_id', 'jobs.id')
    .where('users_jobs.user_id', userId)
    .andWhere('users_jobs.status', type);
  return jobs;
}
