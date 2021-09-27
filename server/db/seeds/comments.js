
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1, 
          publisher: 3, 
          tweet_id: 1, 
          publish_date: '06-06-2021 00:00:00', 
          content: 'something not as good as this!!'
        },
        {
          id: 2, 
          publisher:2, 
          tweet_id: 1, 
          publish_date: '06-06-2021 00:00:00', 
          content: 'a million devs who aren\'t as good as us 😅'
        },
        {
          id: 3, 
          publisher:4, 
          tweet_id: 3, 
          publish_date: '06-06-2021 00:00:00', 
          content: '...what though?!'
        },
        {
          id: 4, 
          publisher:3, 
          tweet_id: 2, 
          publish_date: '06-06-2021 00:00:00', 
          content: '🙌 you are a god man!'
        },
        {
          id: 5, 
          publisher:5, 
          tweet_id: 1, 
          publish_date: '06-06-2021 00:00:00', 
          content: 'some nice DBs! 😂'
        },
        {
          id: 6, 
          publisher:1, 
          tweet_id: 3, 
          publish_date: '06-06-2021 00:00:00', 
          content: 'damn right!!'
        },
        {
          id: 7, 
          publisher:6, 
          tweet_id: 1, 
          publish_date: '06-06-2021 00:00:00', 
          content: 'potentially a lot more bugs than we do!!'
        },
        {
          id: 8, 
          publisher:1, 
          tweet_id: 2, 
          publish_date: '06-06-2021 00:00:00', 
          content: '🤜🤛'
        },
      ]);
    });
};
