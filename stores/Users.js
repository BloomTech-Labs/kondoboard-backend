const db = require('../database/dbConfig.js');

module.exports = {
  getAllUsers,
  getById,
  insert,
  update,
  remove,
};

function getAllUsers() {
  return db('users');
}

function getById(id) {
  return db('users').where({ id });
}

async function insert(user) {
  const id = await db('users').insert(user, 'id');
  return getById(id);
}

function update(id, changes) {
  return db('users').where({ id }).update(changes);
}

function remove(id) {
  return db('users').where({ id }).del();
}
