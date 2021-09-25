
exports.up = function(knex) {
  return knex.schema.createTable('tweets',function(table){
    table.increments('id').primary()
    table.foreign('id').references('comments.tweet_id')
    table.string('publisher')
    table.datetime('publish_time')
    table.string('content')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tweets')
};
