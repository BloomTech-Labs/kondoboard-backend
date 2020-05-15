
exports.up = function(knex) {
  return(
      knex.schema
      // users
      .createTable('users', users => {
          users.increments('id')
          users
            .string('first_name', 255)
            .notNullable()
          users
            .string('last_name', 255)
            .notNullable();
          users
            .string('email', 255)
            .unique()
            .notNullable();
          users
            .string('password', 255)
            .notNullable();
          users.string('profile_image', 255)
          users.string('user_track')
          users.json('tags')
      })

      .createTable('jobs', jobs => {
          jobs.increments('id')
          jobs
            .string('title', 255)
            .notNullable()
          jobs
            .string('description', 255)
            .notNullable()
          jobs.string('pay_min', 255)
          jobs.string('pay_max', 255)
          jobs.string('skills', 255)
      })

      .createTable('user_saved_jobs', saved => {
        saved.increments('id')
        saved
          .integer('user_id', 255)
          .notNullable()
          .references('users.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        saved
          .integer('jobs_id', 255)
          .notNullable()
          .references('jobs.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })

      .createTable('irrelevant_jobs', irrelevant => {
        irrelevant.increments('id')
        irrelevant
          .integer('user_id', 255)
          .notNullable()
          .references('users.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        irrelevant
          .integer('jobs_id', 255)
          .notNullable()
          .references('jobs.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
  )
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('user_saved_jobs')
    .dropTableIfExist('jobs')
    .dropTableIfExist('users')
    .dropTableIfExist('irrelevant_jobs')
};
