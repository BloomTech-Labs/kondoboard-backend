
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_tags').insert([
        { // 1
          user_id: 1,
          tag_name: 'ReactJS',
          color: '#4287f5'
        },
        { // 2
          user_id: 1,
          tag_name: 'Front End',
          color: '#34e056'
        },
        { // 3
          user_id: 1,
          tag_name: 'Health Care',
          color: '#dbde23'
        },
        { // 4
          user_id: 1,
          tag_name: 'Free Coffee',
          color: '#e31e17'
        },        
      ]);
    });
};
