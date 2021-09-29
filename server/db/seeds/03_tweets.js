
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tweets')
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {
          id: 1, 
          publisher: 4, 
          publish_time: 1632872894,
          content: 'What does twitter have?',
          like_count: 254,
          retweet_count: 6,
          quote_count: 10
        },
        {
          id: 2, 
          publisher: 5, 
          publish_time: 1632872894,
          content: 'Guys.. it\'s already done!',
          like_count: 124,
          retweet_count: 3,
          quote_count: 7
        },
        {
          id: 3, 
          publisher: 2, 
          publish_time: 1632872894,
          content: 'yeeeeeeeeet!!!',
          like_count: 467,
          retweet_count: 37,
          quote_count: 39
        },
      ]);
    });
};
