exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_saved_jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_saved_jobs').insert([
        {
          user_id: 1,
          jobs_id: 1
        },
        {
          user_id: 1,
          jobs_id: 2
        },
        {
          user_id: 2,
          jobs_id: 1
        },
      ]);
    });
};
