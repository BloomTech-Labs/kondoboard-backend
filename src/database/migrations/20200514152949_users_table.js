
exports.up = function(knex) {
  return (knex.schema
    .createTable('users', users => {
      users.increments('id')
      users.string('first_name', 255).notNullable()
      users.string('last_name', 255).notNullable();
      users.string('email', 255).unique().notNullable().index();
      users.string('profile_image', 255).defaultTo("")
      users.string('user_track').defaultTo("")
      users.string('display_track').defaultTo("")
      users.json('skills').defaultTo([])
      users.json('cities').defaultTo([])
      users.json('states').defaultTo([])
      users.boolean('remote').defaultTo(0)
    })

    .createTable('jobs', jobs => {
      jobs.increments('id')
      jobs.string('ds_id').unique().index()
      jobs.string('source_url')
      jobs.string('title', 92).notNullable()
      jobs.string('company', 92).notNullable()
      jobs.string('description', 3096).notNullable()
      jobs.date('date_published').notNullable()
      jobs.string('location_city', 92)
      jobs.string('location_state', 92)
      jobs.string('geo_locat', 28)
    })

    //joined table -- Relationship between Users and Jobs
    .createTable('users_jobs', saved => {
      saved.increments('id')
      saved.integer('user_id', 255)
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      saved.integer('jobs_id', 255)
        .notNullable()
        .references('jobs.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      saved.json('tags').defaultTo([])
      saved.string('status', 32).notNullable()
      saved.boolean('archived').defaultTo(false)
    })

    .createTable('user_tags', tag =>{
      tag.increments('id')
      tag
        .integer('user_id', 255)
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tag.string('tag_name', 64).notNullable()
      tag.string('color', 10).defaultTo("#c4c4c4")
    })
    
  );
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExist('user_tags')
    .dropTableIfExist('users_jobs')
    .dropTableIfExist('jobs')
    .dropTableIfExist('users')
  );
};
