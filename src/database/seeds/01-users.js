
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { // id: 1
          first_name: 'Spider',
          last_name: 'Man',
          email: 'peterparker@newyork.com',
          profile_image: '',
          user_track: 'Web',
          skills: 'HTML,CSS,JavaScript,React,Node,Express',
          locations: 'New York,London,Los Angeles',
          remote: true
        }, 
        { // id: 2
          first_name: 'Iron',
          last_name: 'Man',
          email: 'tonystark@california.com',
          profile_image: '',
          user_track: 'Data Science',
          skills: 'AWS,Python,Machine Learning,AI', 
          locations: 'New York,Seattle,Denver,Los Angeles',
          remote: true
        },  
        { // id: 3
          first_name: 'Captain',
          last_name: 'America',
          email: 'superguy@america.com',
          profile_image: '',
          user_track: 'Data Science',
          skills: 'AWS,Python,Machine Learning,AI', 
          locations: 'San Francisco,Washington DC',
          remote: false
        },
        { // id: 4
          first_name: 'Bat',
          last_name: 'Man',
          email: 'batman@gmail.com',
          profile_image: '',
          user_track: 'Data Science',
          skills: 'Neural Network, AI, Robotics',
          locations: 'Unknown',
          remote: true
        }

      ]);
    });
};
