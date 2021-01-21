
exports.up = function(knex) {
  return knex.schema
  .createTable('user', (table) => {
    table.increments('id_user');
    table.string('name_user');
    table.string('lastname_user');
    table.string('username_user');
    table.string('email_user');
    table.date('dataNasc_user');
    table.string('on_user');
    table.timestamp('created_at_user').defaultTo(knex.fn.now());
    table.string('password_user');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
