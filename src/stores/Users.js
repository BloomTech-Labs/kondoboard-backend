const db = require('../database/dbConfig.js');

module.exports = {
  getById,
  getUserByEmail,
  insert,
  update,
  remove,
  getUserJobs
};

// ~~~~~~~~~~ Users ~~~~~~~~~

function getById(id) {
  const user = db('users').where({ id });
  return user;
}

function getUserByEmail(email) {
  return db("users").where({ email });
}

async function insert(user) {
  const id = await db('users').insert(user, 'id');
  return getById(id);
}

function update(id, changes) {
  const updatedUser = db('users').where({ id }).update(changes);
  return updatedUser;
}

function remove(user_id) {
  return db('users').where({ user_id }).del();
}

async function getUserJobs(user_id, type) {
  const userJobs = await 
    db('jobs.*, users_jobs.status')
    .from('users_jobs')
    .join('jobs', 'users_jobs.jobs_id', 'jobs.id')
    .where('users_jobs.user_id', user_id)
    .andWhere('users_jobs.status', type)
  return userJobs;
}

// async function getUserJobs(user_id, type) {
//   const userJobs = await db.select('jobs.*')
//     .from('users_jobs')
//     .join('jobs', 'user_jobs.jobs_id', 'jobs.id')
//     .where('users_jobs.user_id', user_id)
//     .andWhere('user_jobs.status', type)
//   return userJobs
// }