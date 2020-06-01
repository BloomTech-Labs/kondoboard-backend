const db = require('../database/dbConfig.js');

module.exports = {
  getById,
  getUserByEmail,
  insert,
  update,
  remove,
  getFavoriteJobs,
  addFavoriteJob,
  getIrrelevantJobs,
  addIrrelevantJob,
};

// ~~~~~~~~~~ Users ~~~~~~~~~

function getById(id) {
  return db('users').where({ id });
}

function getUserByEmail(email) {
  return db("users").where({ email });
}

//Add new user
async function insert(user) {
  const [id] = await db('users').insert(user, 'id');
  const newUser = await getById(id);
  return newUser;
}

async function update(id, changes) {
  const updatedUser = await db('users').where({ id }).update(changes);
  return updatedUser;
}

function remove(id) {
  return db('users').where({ id }).del();
}

// ~~~~~~~~~~~ Jobs ~~~~~~~~~~

function getFavoriteJobs(user_id) {
  return db('users');
}

function addFavoriteJob(user_id, favorited) {
  return db('user_saved_jobs'); //insert user.id, job.id, and status="favorite"
}

function getIrrelevantJobs(user_id) {
  return db('users');
}

function addIrrelevantJob(user_id, favorited) {
  return db('user_saved_jobs'); //insert user.id, job.id, and status="irrelevant"
}

function archiveUserJob(user_id, saved_job_id) {
  return db('user_saved_jobs'); //change archived boolean to true
}

// ~~~~~~~~~~~ User Tags ~~~~~~~~~~~

function getUserTags(user_id) {
  return db('user_tags');
}

function addUserTag(userTag) {
  return db('user_tags'); //insert user.id, name, and color
}

function updateUserTag(tag_id, changes) {
  return db('user_tags'); //update changes
}

function removeUserTag(tag_id) {
  return db('user_tags'); //delete where id=tag_id
}
