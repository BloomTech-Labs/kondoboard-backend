exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_tags').insert([
        { // 1
          user_id: 1,
          tag_name: 'ReactJS',
          color: '#4287f5',
          job_id: 'JS927927c0a7eb091796b82aea8f3a0770459567e4c662b9d727a428ccdeea092a',
        },
        { // 2
          user_id: 1,
          tag_name: 'Front End',
          color: '#34e056',
          job_id: 'JS927927c0a7eb091796b82aea8f3a0770459567e4c662b9d727a428ccdeea092a',
        },
        { // 3
          user_id: 1,
          tag_name: 'Health Care',
          color: '#dbde23',
          job_id: 'JS1449e04cb59e7b8833b2b6e2215fbfed2fefc13f3a3ab01e4028197b893ead03',
        },
        { // 4
          user_id: 1,
          tag_name: 'Free Coffee',
          color: '#e31e17',
          job_id: 'JSc07a0006bc2ea74564736afa3a58e4a65a54e848bd05187aad3d24f7219f64e6',
        },        
      ]);
    });
};
