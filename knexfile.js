require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: process.env.DB_NAME,
  user: "postgres",
  password: "User_Password",
}

// const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'pg',
    // useNullAsDefault: true,
    connection: localPg,
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done)
    //   },
    // },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds'
    },
  },

  // db connection for testing
  testing: {
    client: "pg",
    connection: process.env.DB_URL,
    // useNullAsDefault: true,
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/database/seeds',
    },
  }
};
