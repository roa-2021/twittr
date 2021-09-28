

exports.up = function(knex) {
  return knex.schema.createTable('comments',function(table){
    table.increments('id').primary()
    table.integer('publisher')
    table.foreign('publisher').references('users.id')
    table.integer('tweet_id')
    table.foreign('tweet_id').references('tweets.id')
    table.timestamp('publish_date')
    table.string('content')
  })
      
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
