
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('follows')
    .then(function () {
      // Inserts seed entries
      return knex('follows').insert([
        {id: 1, followers: 1, following: 2},
        {id: 2, followers: 1, following: 3},
        {id: 3, followers: 1, following: 4},
        {id: 4, followers: 1, following: 5},
        {id: 5, followers: 1, following: 6},
        {id: 6, followers: 2, following: 1},
        {id: 7, followers: 2, following: 3},
        {id: 8, followers: 2, following: 4},
        {id: 9, followers: 2, following: 5},
        {id: 10, followers: 2, following: 6},
        {id: 11, followers: 3, following: 1},
        {id: 12, followers: 3, following: 2},
        {id: 13, followers: 3, following: 4},
        {id: 14, followers: 3, following: 5},
        {id: 15, followers: 3, following: 6},
        {id: 16, followers: 4, following: 1},
        {id: 17, followers: 4, following: 2},
        {id: 18, followers: 4, following: 3},
        {id: 19, followers: 4, following: 5},
        {id: 20, followers: 4, following: 6},
        {id: 21, followers: 5, following: 1},
        {id: 22, followers: 5, following: 2},
        {id: 23, followers: 5, following: 3},
        {id: 24, followers: 5, following: 4},
        {id: 25, followers: 5, following: 6},
        {id: 26, followers: 6, following: 1},
        {id: 27, followers: 6, following: 2},
        {id: 28, followers: 6, following: 3},
        {id: 29, followers: 6, following: 4},
        {id: 30, followers: 6, following: 5}
      ]);
    });
};
