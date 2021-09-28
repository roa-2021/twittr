exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(() => {
      return knex('tweets').del()
    })
    .then(() => {
      return knex('follows').del()
    })
    .then(() => {
      return knex('users').del()
    })
}