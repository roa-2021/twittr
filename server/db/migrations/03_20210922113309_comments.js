

exports.up = function(knex) {
  return knex.schema.createTable('comments',function(table){
    table.increments('id').primary()
    table.integer('publisher')
    table.integer('tweet_id')
    table.foreign('tweet_id').references('tweets.id')
    table.datetime('publish_date')
    table.string('content')
  })
      
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
