
exports.up = function(knex) {
  return knex.schema.createTable('follows',function(table){
    table.increments('id').primary()
    table.integer('followers')
    table.foreign('followers').references('users.id')
    table.integer('following')
    table.foreign('following').references('users.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('follows')
};
