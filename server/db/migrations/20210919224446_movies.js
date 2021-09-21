exports.up = function (knex) {
  return knex.schema.createTable('movies', t => {
    t.increments('id').primary()
    t.string('title')
    t.string('imdb_id')
    t.boolean('watched').defaultTo(false)
    t.integer('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
