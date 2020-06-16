exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('columns').del()
    .then(function () {
      // Inserts seed entries
      return knex('columns').insert([
        { // 1
          user_id: 1,
          name: 'Applied Jobs',
          location: '1',
        },
        { // 2
          user_id: 1,
          name: 'Phone Interview',
          location: '2',
        },
        { // 3
          user_id: 1,
          name: 'First Interview',
          location: '3',
        },
        { // 4
          user_id: 1,
          name: 'Second Interview',
          location: '4',
        },        
      ]);
    });
};
