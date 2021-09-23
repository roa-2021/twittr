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
          nickname:'nickname1',
          email: 'nickname1@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '20'
        },
        {
          id: 2, 
          name: 'user2',
          nickname:'nickname2',
          email: 'nickname2@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '60'
        },
        {
          id: 3, 
          name: 'user3',
          nickname:'nickname3',
          email: 'nickname3@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '23'
        },
        {
          id: 4, 
          name: 'user4',
          nickname:'nickname4',
          email: 'nickname4@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '55'
        },
        {
          id: 5, 
          name: 'user5',
          nickname:'nickname5',
          email: 'nickname5@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '21'
        },
        {
          id: 6, 
          name: 'user6',
          nickname:'nickname6',
          email: 'nickname6@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '23'
        },
        {
          id: 7, 
          name: 'user7',
          nickname:'nickname7',
          email: 'nickname7@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '20'
        },
        {
          id: 8, 
          name: 'user8',
          nickname:'nickname8',
          email: 'nickname8@twitter.com',
          password: '123456',
          profile_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
          varified: 'true',
          bio: 'this is a lazy guy, didnt type anything in it',
          age: '30'
        },
        {
          id: 9, 
          name: 'user9',
          nickname:'nickname9',
          email: 'nickname9@twitter.com',
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
