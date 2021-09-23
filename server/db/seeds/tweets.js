
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {
          id: 1, 
          publisher: 1, 
          publish_time: '04-05-2021 00:00:00',
          content: 'This is the content of the tweet',
          like_count: 3,
          retweet_count: 3,
          quote_count: 2
        },
        {
          id: 2, 
          publisher: 1, 
          publish_time: '04-05-2021 00:00:00',
          content: 'This is the content of the tweet',
          like_count: 3,
          retweet_count: 3,
          quote_count: 2
        },
        {
          id: 3, 
          publisher: 3, 
          publish_time: '04-05-2021 00:00:00',
          content: 'This is the content of the tweet',
          like_count: 3,
          retweet_count: 3,
          quote_count: 2
        },
      ]);
    });
};
