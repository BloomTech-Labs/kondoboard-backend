const db = require('../database/dbConfig.js');

module.exports = {
  getAllUsers,
  getById,
  findUserBy,
  insert,
  update,
  remove,
  updateSkills,
  updateCities,
  toggleRemote,
  getFavoriteJobs,
  addFavoriteJob,
  getIrrelevantJobs,
  addIrrelevantJob,
  archiveUserJob,
  getUserTags,
  addUserTag,
  updateUserTag,
  removeUserTag
};


// ~~~~~~~~~~ Users ~~~~~~~~~

function getAllUsers() {
  return db('users');
}

function getById(id) {
  return db('users').where({ id });
}

function findUserBy(filter) {
  return db("users")
  .where(filter);
}

//Add new user -- not used yet
async function insert(user ) {
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

// ~~~~~~~~ Users Info ~~~~~~~

function updateSkills(user_id, skillsArray) {
  return db('users'); //update users.skills = skillsArray
  //return updated user
}

function updateCities(user_id, citiesArray) {
  return db('users'); //update users.cities = citiesArray
  //return updated user
}

function toggleRemote(user_id) {
  return db('users'); //invert users.remote boolean
  //return updated user
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