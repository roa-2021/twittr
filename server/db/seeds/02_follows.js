
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('follows').del()
    .then(function () {
      // Inserts seed entries
      return knex('follows').insert([
        {id: 1, followers: 1, following: 6},
        {id: 2, followers: 1, following: 4},
        {id: 3, followers: 1, following: 4},
        {id: 4, followers: 2, following: 4},
        {id: 5, followers: 2, following: 1},
        {id: 6, followers: 3, following: 5},
        {id: 7, followers: 3, following: 4},
        {id: 8, followers: 3, following: 1},
        {id: 9, followers: 4, following: 2},
        {id: 10, followers: 4, following: 1},
        {id: 11, followers: 4, following: 5},
        {id: 12, followers: 5, following: 1},
        {id: 13, followers: 5, following: 4},
        {id: 14, followers: 5, following: 2},
        {id: 15, followers: 6, following: 3},
        {id: 16, followers: 6, following: 1},
        {id: 17, followers: 6, following: 2}
      ]);
    });
};
