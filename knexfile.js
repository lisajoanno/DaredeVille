// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host     : 'sql11.freemysqlhosting.net',
      user     : 'sql11156849',
      password : 'KZWqQN94C6',
      database : 'sql11156849'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host     : 'sql11.freemysqlhosting.net',
      user     : 'sql11156849',
      password : 'KZWqQN94C6',
      database : 'sql11156849'
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
      user     : 'sql11156849',
      password : 'KZWqQN94C6',
      database : 'sql11156849'
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
