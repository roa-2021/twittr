
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('like').del()
    .then(function () {
      // Inserts seed entries
      return knex('like').insert([
        {id: 1, tweet_id: 1, user_id: 6},
        {id: 2, tweet_id: 1, user_id: 4},
        {id: 3, tweet_id: 1, user_id: 4},
        {id: 4, tweet_id: 2, user_id: 4},
        {id: 5, tweet_id: 2, user_id: 1},
        {id: 6, tweet_id: 3, user_id: 5},
        {id: 7, tweet_id: 3, user_id: 4},
        {id: 8, tweet_id: 3, user_id: 1},
        {id: 9, tweet_id: 4, user_id: 2},
        {id: 10, tweet_id: 4, user_id: 1},
        {id: 11, tweet_id: 4, user_id: 5},
        {id: 12, tweet_id: 5, user_id: 1},
        {id: 13, tweet_id: 5, user_id: 4},
        {id: 14, tweet_id: 5, user_id: 2},
        {id: 15, tweet_id: 6, user_id: 3},
        {id: 16, tweet_id: 6, user_id: 1},
        {id: 17, tweet_id: 6, user_id: 2}
      ]);
    });
};
