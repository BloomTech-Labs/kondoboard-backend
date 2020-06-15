
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users_jobs').del();
  // Inserts seed entries
  await knex('users_jobs').insert([
    {
      user_id: 1,
      jobs_id: 1,
      status: 'favorite',
      tags: JSON.stringify(['3','4']),
    },
    {
      user_id: 1,
      jobs_id: 2,
      status: 'irrelevant',
    },
    {
      user_id: 2,
      jobs_id: 1,
      status: 'irrelevant',
    },
    {
      user_id: 3,
      jobs_id: 1,
      status: 'irrelevant',
    },
    {
      user_id: 3,
      jobs_id: 2,
      status: 'irrelevant',
    },
    {
      user_id: 3,
      jobs_id: 3,
      status: 'favorite',
    },
    {
      user_id: 4,
      jobs_id: 1,
      status: 'irrelevant',
    },
    {
      user_id: 4,
      jobs_id: 2,
      status: 'irrelevant',
    },
    {
      user_id: 4,
      jobs_id: 3,
      status: 'irrelevant',
    },
    {
      user_id: 4,
      jobs_id: 4,
      status: 'irrelevant',
    },
    {
      user_id: 4,
      jobs_id: 5,
      status: 'irrelevant',
    },
    {
      user_id: 1,
      jobs_id: 3,
      status: 'favorite',
      tags: JSON.stringify(['2','3']),
    },
    {
      user_id: 2,
      jobs_id: 7,
      status: 'favorite',
    },
    {
      user_id: 2,
      jobs_id: 6,
      status: 'favorite',
    },
    {
      user_id: 4,
      jobs_id: 6,
      status: 'irrelevant',
    },
    {
      user_id: 4,
      jobs_id: 7,
      status: 'irrelevant',
    },
  ]);
};
