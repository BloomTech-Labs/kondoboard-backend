exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job_column').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_column').insert([
        { // 1
          users_jobs_id: 1,
          columns_id: 1,
        },
        { // 2
          users_jobs_id: 2,
          columns_id: 1,
        },
        { // 3
          users_jobs_id: 3,
          columns_id: 2,
        },
        { // 4
          users_jobs_id: 4,
          columns_id: 3,
        },        
      ]);
    });
};
