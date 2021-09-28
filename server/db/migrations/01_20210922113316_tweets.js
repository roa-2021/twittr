
exports.up = function(knex) {
  return knex.schema.createTable('tweets',function(table){
    table.increments('id').primary()
    table.integer('publisher')
    table.foreign('publisher').references('users.id')
    table.datetime('publish_time')
    table.string('content')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tweets')
};
