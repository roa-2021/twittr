
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('like').del()
    .then(function () {
      // Inserts seed entries
      return knex('like').insert([
        {id: 1, tweet_id: '1',user_id:1 ,like:true},
        {id: 2, tweet_id: '2',user_id:2 ,like:true},
        {id: 3, tweet_id: '3',user_id:3 ,like:true},
        {id: 4, tweet_id: '1',user_id:4 ,like:true},
        {id: 5, tweet_id: '2',user_id:5 ,like:true},
        {id: 6, tweet_id: '3',user_id:6 ,like:true},
        {id: 7, tweet_id: '1',user_id:7 ,like:true},
        {id: 8, tweet_id: '2',user_id:8 ,like:true},
        {id: 9, tweet_id: '3',user_id:9 ,like:true},
      ]);
    });
};
