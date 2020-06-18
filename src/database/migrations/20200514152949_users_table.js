exports.up = function(knex) {
  return (knex.schema
    .createTable('users', users => {
      users.increments('id');
      users.string('first_name', 255).notNullable();
      users.string('last_name', 255).notNullable();
      users.string('email', 255).unique().notNullable().index();
      users.string('profile_image', 255).defaultTo('');
      users.string('user_track').defaultTo('');
      users.string('display_track').defaultTo('');
      users.json('skills').defaultTo([]);
      users.json('cities').defaultTo([]);
      users.json('states').defaultTo([]);
      users.boolean('remote').defaultTo(0);
    })

    .createTable('jobs', jobs => {
      jobs.increments('id');
      jobs.string('ds_id').unique().index();
      jobs.string('source_url');
      jobs.string('title', 92).notNullable();
      jobs.string('company', 92).notNullable();
      jobs.string('description', 3096).notNullable();
      jobs.date('date_published').notNullable();
      jobs.string('location_city', 92);
      jobs.string('location_state', 92);
      jobs.string('geo_locat', 28);
    })

    //joined table -- Relationship between Users and Jobs
    .createTable('users_jobs', saved => {
      saved.increments('id');
      saved.integer('user_id', 255)
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      saved.integer('jobs_id', 255)
        .notNullable()
        .references('jobs.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      saved.json('tags').defaultTo([]);
      saved.string('status', 32).notNullable();
      saved.boolean('archived').defaultTo(false);
      saved.string('notes', 1000).defaultTo('');
      saved.boolean('applied').defaultTo(false);
    })

    .createTable('user_tags', tag => {
      tag.increments('id');
      tag.integer('user_id', 255)
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tag.string('tag_name', 64).notNullable();
      tag.string('color', 22).defaultTo('#c4c4c4');
      tag.string('job_id').notNullable();
    })

    .createTable('columns', column => {
      column.increments('id');
      column.integer('user_id', 255)
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      column.string('name', 64).notNullable();
      column.integer('location').notNullable();
    })

    //joined table -- Relationship between users_jobs and columns
    .createTable('job_column', job_column => {
      job_column.increments('id');
      job_column.integer('users_jobs_id')
        .notNullable()
        .references('users_jobs.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      job_column.integer('columns_id');
    })
  );
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExist('job_column')
    .dropTableIfExist('columns')
    .dropTableIfExist('user_tags')
    .dropTableIfExist('users_jobs')
    .dropTableIfExist('jobs')
    .dropTableIfExist('users')
  );
};
