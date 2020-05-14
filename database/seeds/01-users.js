const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Billy',
          last_name: 'Baney',
          email: 'Billy@gmail.com',
          password: bcrypt.hashSync('testtest', 10),
          profile_image: '',
          user_track: 'Web',
          tags: '',
        }, 
      ]);
    });
};
