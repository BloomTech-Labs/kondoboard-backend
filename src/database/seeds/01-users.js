exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users').del();
  // Inserts seed entries
  await knex('users').insert([
    { // id: 1
      first_name: 'Spider',
      last_name: 'Man',
      email: 'peterparker@newyork.com',
      profile_image: '',
      user_track: 'Web',
      display_track: 'Full Stack',
      skills: JSON.stringify(['CSS','React','HTML']),
      states: JSON.stringify(['Colorado','New York']),
      cities: JSON.stringify(['Denver','San Francisco']),
      remote: true,
    }, 
    { // id: 2
      first_name: 'Iron',
      last_name: 'Man',
      email: 'tonystark@california.com',
      profile_image: '',
      user_track: 'Data Science',
      display_track: 'Engineer',
      skills: JSON.stringify([ 'AWS', 'Python', 'C' ]), 
      states: JSON.stringify(['California']),
      cities: JSON.stringify(['San Francisco']),
      remote: true,
    },  
    { // id: 3
      first_name: 'Captain',
      last_name: 'America',
      email: 'superguy@america.com',
      profile_image: '',
      user_track: 'Data Science',
      display_track: 'AI',
      skills: JSON.stringify([ 'CSS', 'React', 'HTML' ]),
      states: JSON.stringify(['Maryland']),
      cities: JSON.stringify(['Washington DC']),
      remote: false,
    },
    { // id: 4 ~ testing default fields
      first_name: 'Bat',
      last_name: 'Man',
      email: 'batman@gmail.com',
    },
  ]);
};
