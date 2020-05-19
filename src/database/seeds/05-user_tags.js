exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_tags').insert([
        {
          user_id: 1,
          tag_name: "ideal",
          color: "green",
        },
        
      ]);
    });
};
