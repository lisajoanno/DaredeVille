exports.up = function(knex, Promise) {

    return Promise.all([
        knex.schema.createTable('dangers', function (table) {
            table.increments('id').primary();
            table.decimal('latitude',19, 16).notNull();
            table.decimal('longitude', 19, 16).notNull();
            table.dateTime('created_at').notNull();
            table.dateTime('updated_at').notNull();
            table.string('name').notNull();
        }),
        knex.schema.createTable('users', function(table){
            table.increments('id').primary();
            table.string('email').notNull();
            table.string('name').notNull();
            table.string('role').notNull();
        }),
        knex.schema.createTable('notifications', function(table){
            table.increments('id').primary();
            table.integer('user_id').notNull();
            table.string('type').notNull();
            table.dateTime('created_at').notNull();
            table.integer('danger_lvl').notNull();
        }),
        knex.schema.createTable('dangers_notifications', function(table){
            table.increments('id').primary();
            table.integer('danger_id').notNull();
            table.integer('notification_id').notNull();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('dangers'),
        knex.schema.dropTable('notifications'),
        knex.schema.dropTable('dangers_notifications')
    ])
};
