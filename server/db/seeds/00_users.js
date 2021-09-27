const { generateHash } = require('authenticare/server')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        {
          id: 1, 
          name: 'Gordon',
          username:'MrSass',
          email_address: 'sassy4you@eda.com',
          password: 'abc',
          profile_image: 'https://media.makeameme.org/created/the-sass-is-5ac0d8.jpg',
          varified: 'true',
          bio: '🧑‍💻 killa junior dev with a hankering for the sass',
          birthday: '06-04-1987 00:00'
        },
        {
          id: 2, 
          name: 'Patrick',
          username:'PJSulley',
          email_address: 'sulley-till-the-sun-goes-down@eda.com',
          password: 'abc',
          profile_image: 'https://camo.githubusercontent.com/1f26eb501b27c68ac74070110676b31e0d4e484c818d61edc4bef2350ab7b054/687474703a2f2f692e696d6775722e636f6d2f4b7653574c486f2e706e67',
          varified: 'true',
          bio: '🐼 furry but in a good way',
          birthday: '06-04-1987 00:00'
        },
        {
          id: 3, 
          name: 'Matthew',
          username:'EDGEmaster69',
          email_address: 'EDGEmaster69@eda.com',
          password: 'abc',
          profile_image: 'https://pbs.twimg.com/media/DwvaXrOX0AEIYh-.jpg',
          varified: 'true',
          bio: 'one man\'s trash is another\'s treasure',
          birthday: '06-04-1987 00:00'
        },
        {
          id: 4, 
          name: 'Max',
          username:'DrDorsaaay',
          email_address: 'DrDorsaaay@eda.com',
          password: 'abc',
          profile_image: '/images/max-profile.png',
          varified: 'false',
          bio: 'we\'re all carbon until we aren\'t ⚛',
          birthday: '06-04-1987 00:00'
        },
        {
          id: 5, 
          name: 'Kang',
          username:'LordOfDBEEEEs',
          email_address: 'LordOfDBEEEEs@eda.com',
          password: 'abc',
          profile_image: '/images/kang-profile.png',
          varified: 'true',
          bio: 'you wan\'it you got\'it',
          birthday: '06-04-1987 00:0000'
        },
        {
          id: 6, 
          name: 'Jordan',
          username:'LordLiberator',
          email_address: 'lordLiberty6@eda.com',
          password: 'abc',
          profile_image: '/images/jordan-profile.png',
          varified: 'true',
          bio: '🗽🗽🗽🗽🗽🗽🗽🗽',
          birthday: '06-04-1987 00:006'
        }
      ].map(user => {
        return generateHash(user.password)
          .then(hash => {
            user.hash = hash
            delete user.password
            return user
          })
      })).then(users => {
        return knex('users').insert(users)
      });
    });
};
