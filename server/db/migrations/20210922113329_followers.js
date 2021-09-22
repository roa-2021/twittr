
exports.up = function(knex) {
  return knex.schema.createTable('followers',function(table){
    table.increments('id').primary()
    table.integer('follower')
    table.integer('following')
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('followers')
};
