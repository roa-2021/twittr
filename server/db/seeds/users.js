const { generateHash } = require('authenticare/server')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        {
          id: 1, 
          name: 'user1',
          username:'username1',
          email_address: 'username1@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '20'
        },
        {
          id: 2, 
          name: 'user2',
          username:'username2',
          email_address: 'username2@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '60'
        },
        {
          id: 3, 
          name: 'user3',
          username:'username3',
          email_address: 'username3@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '23'
        },
        {
          id: 4, 
          name: 'user4',
          username:'username4',
          email_address: 'username4@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '55'
        },
        {
          id: 5, 
          name: 'user5',
          username:'username5',
          email_address: 'username5@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '21'
        },
        {
          id: 6, 
          name: 'user6',
          username:'username6',
          email_address: 'username6@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '23'
        },
        {
          id: 7, 
          name: 'user7',
          username:'username7',
          email_address: 'username7@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '20'
        },
        {
          id: 8, 
          name: 'user8',
          username:'username8',
          email_address: 'username8@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '30'
        },
        {
          id: 9, 
          name: 'user9',
          username:'username9',
          email_address: 'username9@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '40'
        },
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
