exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('irrelevant_jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('irrelevant_jobs').insert([
        {
          user_id: 1,
          jobs_id: 2
        },
      ]);
    });
};
