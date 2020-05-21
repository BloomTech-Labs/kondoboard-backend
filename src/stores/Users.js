const db = require('../database/dbConfig.js');

module.exports = {
  getAllUsers,
  getById,
  insert,
  update,
  remove,
  getUserFavorited,
  addUserFavorited,
};

function getAllUsers() {
  return db('users');
}

function getById(id) {
  return db('users').where({ id });
}

function getUserFavorited(id) {
  return db('user_saved_jobs')
    .where('user_id', id)
    .select('*')
    .where('user_id', id)
    .join('jobs',
    'user_saved_jobs.jobs_id',
    'jobs.id')
    .catch(err => console.log('******helper: ', err))
};

function addUserFavorited(id, favorited) {
  console.log('id', id, 'favorited', favorited);
  return db('user_saved_jobs')
    .insert({user_id:id, jobs_id:favorited.jobs_id})
}

async function insert(user) {
  const id = await db('users').insert(user, 'id');
  return getById(id);
}

async function insertTag(newTag) {
  const id = await db('user_tags').insert(newTag, 'id');
  return getById(id);
}

function update(id, changes) {
  return db('users').where({ id }).update(changes);
}

function remove(id) {
  return db('users').where({ id }).del();
}
