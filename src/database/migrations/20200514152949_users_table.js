
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
            .notNullable()
            .index();
          users.string('profile_image', 255)
          users.string('user_track')
          users.json('skills')
          users.json('locations')
          users.boolean('remote')
      })

      .createTable('jobs', jobs => {
          jobs.increments('id')
          jobs.string('ds_id').unique()
          jobs.string('source_url')
          jobs
            .string('title', 125)
            .notNullable()
          jobs
            .string('description', 1000)
            .notNullable()
          jobs.date('date_published').notNullable()
          jobs.string('locations', 255)
        })

      //joined table -- Relationship between Users and Jobs
      .createTable('users_jobs', saved => {
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
        saved
          .string('status', 32)
          .notNullable()
        saved
          .boolean('archived')
          .defaultTo(false)
      })

      // .createTable('user_tags', tag =>{
      //   tag.increments('id')
      //   tag
      //     .integer('user_id', 255)
      //     .notNullable()
      //     .references('users.id')
      //     .onDelete('CASCADE')
      //     .onUpdate('CASCADE')
      //   tag
      //     .string('tag_name', 64)
      //     .notNullable()
      //   tag
      //     .string('color', 10)
      //     .notNullable()
      // })

      //joined table
      // .createTable('job_tags', jobTag => {
      //   jobTag.increments('id')
      //   jobTag
      //     .integer('job_tags_id', 255)
      //     .notNullable()
      //     .references('user_tags.id')
      //     .onDelete('CASCADE')
      //     .onUpdate('CASCADE')
      //   jobTag
      //     .integer('jobs_id', 255)
      //     .notNullable()
      //     .references('jobs.id')
      //     .onDelete('CASCADE')
      //     .onUpdate('CASCADE')
      // })

  )
};

exports.down = function(knex) {
  return knex.schema
    // .dropTableIfExist('job_tags')
    // .dropTableIfExist('user_tags')
    .dropTableIfExist('users_jobs')
    .dropTableIfExist('jobs')
    .dropTableIfExist('users')
};