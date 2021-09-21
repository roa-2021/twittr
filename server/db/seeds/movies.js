exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          title: 'The Green Knight',
          imdb_id: 'tt9243804',
          watched: false,
          rating: null
        },
        {
          id: 2,
          title: 'Hot Fuzz',
          imdb_id: 'tt0425112',
          watched: true,
          rating: null
        }
      ])
    })
}
