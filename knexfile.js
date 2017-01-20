// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host     : 'sql11.freemysqlhosting.net',
      user     : 'sql11154421',
      password : '4IQfvAqgYS',
      database : 'sql11154421'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host     : 'sql11.freemysqlhosting.net',
      user     : 'sql11154421',
      password : '4IQfvAqgYS',
      database : 'sql11154421'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host     : 'sql11.freemysqlhosting.net',
      user     : 'sql11154421',
      password : '4IQfvAqgYS',
      database : 'sql11154421'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
