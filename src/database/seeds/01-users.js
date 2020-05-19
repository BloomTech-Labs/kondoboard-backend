const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes existing entries, then add new data 
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          first_name: 'Billy',
          last_name: 'Baney',
          email: 'Billy@gmail.com',
          password: bcrypt.hashSync('testtest', 10),
          profile_image: '',
          user_track: 'Web',
        }, 
        {
          first_name: 'Spider',
          last_name: 'Man',
          email: 'peterparker@newyork.com',
          password: bcrypt.hashSync('testtest', 10),
          profile_image: '',
          user_track: 'Web',
        }, 
        {
          first_name: 'Iron',
          last_name: 'Man',
          email: 'tonystark@california.com',
          password: bcrypt.hashSync('testtest', 10),
          profile_image: '',
          user_track: 'Data Science',
        }, 
        {
          first_name: 'Captain',
          last_name: 'America',
          email: 'superguy@america.com',
          password: bcrypt.hashSync('testtest', 10),
          profile_image: '',
          user_track: 'Data Science',
        },

      ]);
    });
};
