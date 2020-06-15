
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('columns').del()
    .then(function () {
      // Inserts seed entries
      return knex('columns').insert([
        { // 1
          user_id: 1,
          column_name: 'Applied Jobs',
          column_location: '1'
        },
        { // 2
          user_id: 1,
          column_name: 'Phone Interview',
          column_location: '2'
        },
        { // 3
          user_id: 1,
          column_name: 'First Interview',
          column_location: '3'
        },
        { // 4
          user_id: 1,
          column_name: 'Second Interview',
          column_location: '4'
        },        
      ]);
    });
};