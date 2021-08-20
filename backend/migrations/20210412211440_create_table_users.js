
exports.up = function(knex, Promise) { // Sempre atualizando o banco, mesmo que seja drops.
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) { // Sempre o contrário
        return knex.schema.dropTable('users')
};
