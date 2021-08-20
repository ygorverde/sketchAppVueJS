
exports.up = function(knex) { // Alterar tabela adicionando coluna
     return knex.schema.alterTable('users', table => {
         table.timestamp('deletedAt')
     })
};

exports.down = function(knex) { // Alterar tabela excluindo coluna
    return knex.schema.alterTable('users', table => {
        table.dropColumn('deletedAt')
    })
};
