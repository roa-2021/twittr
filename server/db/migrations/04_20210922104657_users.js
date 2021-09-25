
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.foreign('id').references('tweets.publisher')
    table.foreign('id').references('comments.publisher')
    table.foreign('id').references('followers.follower')
    table.foreign('id').references('followers.following')
    table.string('name')
    table.string('username');
    table.string('email_address');
    table.string('hash');
    table.string('profile_image');
    table.string('varified');
    table.string('bio');
    table.string('age')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
