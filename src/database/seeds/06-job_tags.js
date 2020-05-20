exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_tags').insert([
        {
          job_tags_id: 1,
          jobs_id: 1
        },
        {
          job_tags_id: 3,
          jobs_id: 1
        },  
        {
          job_tags_id: 3,
          jobs_id: 2
        },
        {
          job_tags_id: 2,
          jobs_id: 3
        },
      ]);
    });
};