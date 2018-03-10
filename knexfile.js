require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'pizza-api',
      host: '127.0.0.1',
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
    },
    migrations: {
      directory: 'db/migrations/',
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'db/migrations/',
      tableName: 'knex_migrations',
    },
  },
};
