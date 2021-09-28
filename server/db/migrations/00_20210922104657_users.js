
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('username');
    table.string('email_address');
    table.string('hash');
    table.string('profile_image');
    table.string('varified');
    table.string('bio');
    table.timestamp('birthday')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
