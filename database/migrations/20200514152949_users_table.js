
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

      //joined table
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

      //joined table
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

      .createTable('user_tags', tag =>{
        tag.increments('id')
        tag
          .integer('user_id', 255)
          .notNullable()
          .references('users.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        tag
          .string('tag_name', 64)
          .notNullable()
        tag
          .string('color', 10)
          .notNullable()
      })

      //joined table
      .createTable('job_tags', jobTag => {
        jobTag.increments('id')
        jobTag
          .integer('job_tags_id', 255)
          .notNullable()
          .references('user_tags.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        jobTag
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
    .dropTableIfExists('job_tags')
    .dropTableIfExists('user_tags')
    .dropTableIfExist('irrelevant_jobs')
    .dropTableIfExist('user_saved_jobs')
    .dropTableIfExist('jobs')
    .dropTableIfExist('users')
};
