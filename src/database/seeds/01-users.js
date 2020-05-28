
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
          skills: JSON.stringify(["CSS",'React','HTML']),
          locations: JSON.stringify(["Denver",'New York','San Francisco']),
          remote: true
        }, 
        { // id: 2
          first_name: 'Iron',
          last_name: 'Man',
          email: 'tonystark@california.com',
          profile_image: '',
          user_track: 'Data Science',
          skills: JSON.stringify([ "AWS", 'Python', 'C' ]), 
          locations: JSON.stringify([ "New York", 'London', 'San Francisco' ]),
          remote: true
        },  
        { // id: 3
          first_name: 'Captain',
          last_name: 'America',
          email: 'superguy@america.com',
          profile_image: '',
          user_track: 'Data Science',
          skills: JSON.stringify([ "CSS", 'React', 'HTML' ]),
          locations: JSON.stringify([ 'Washington DC', 'San Francisco', 'New York' ]),
          remote: false
        },
        { // id: 4
          first_name: 'Bat',
          last_name: 'Man',
          email: 'batman@gmail.com',
          profile_image: '',
          user_track: 'Data Science',
          skills: JSON.stringify([ "Neural Networks", 'AI', 'Robotics' ]),
          locations: JSON.stringify([ 'Unknown' ]),
          remote: true
        }

      ]);
    });
};
