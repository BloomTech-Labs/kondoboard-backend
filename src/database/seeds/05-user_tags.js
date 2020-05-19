exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_tags').insert([
        {
          user_id: 1,
          tag_name: "ideal",
          color: "#0FD121"
        },
        {
          user_id: 1,
          tag_name: "maybe",
          color: "#F5F744"
        },
        {
          user_id: 2,
          tag_name: "Booya",
          color: "#6BF5E0"
        },
        {
          user_id: 3,
          tag_name: "Denied",
          color: "#6BF5E0"
        },
        
      ]);
    });
};