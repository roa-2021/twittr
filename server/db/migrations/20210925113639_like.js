
exports.up = function(knex) {
  return knex.schema.createTable('like',function(table)
  {
    table.increments('id').primary()
    table.integer('tweet_id')
    table.integer('user_id')
    table.boolean('like')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('like')
};
