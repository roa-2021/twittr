
exports.up = function(knex) {
  return knex.schema.createTable('follows',function(table){
    table.increments('id').primary()
    table.integer('followers')
    table.integer('following')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('follows')
};
