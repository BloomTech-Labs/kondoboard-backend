
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_jobs').insert([
        {
          user_id: 1,
          jobs_id: 1,
          status: 'favorite',
          archived: false
        },
        {
          user_id: 1,
          jobs_id: 2,
          status: 'irrelevant',
          archived: false
        },
        {
          user_id: 2,
          jobs_id: 1,
          status: 'favorite',
          archived: true
        },
      ]);
    });
};
