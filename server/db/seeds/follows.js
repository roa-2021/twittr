
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('follows').del()
    .then(function () {
      // Inserts seed entries
      return knex('follows').insert([
        {id: 1, followers: 1, following: 4},
        {id: 2, followers: 1, following: 6},
        {id: 3, followers: 1, following: 3},
        {id: 4, followers: 4, following: 6},
        {id: 5, followers: 6, following: 2},
        {id: 6, followers: 4, following: 8},
        {id: 7, followers: 8, following: 3},
        {id: 8, followers: 2, following: 5},
        {id: 9, followers: 7, following: 6},
      ]);
    });
};
