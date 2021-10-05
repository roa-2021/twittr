const { generateHash } = require('authenticare/server')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
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
          // birthday: '06-04-1987 00:00:00'

        },
        {
          id: 2, 
          name: 'Patrick',
          username:'pjsulley',
          email_address: 'sulley-till-the-sun-goes-down@eda.com',
          password: 'abc',
          profile_image: 'https://camo.githubusercontent.com/1f26eb501b27c68ac74070110676b31e0d4e484c818d61edc4bef2350ab7b054/687474703a2f2f692e696d6775722e636f6d2f4b7653574c486f2e706e67',
          varified: 'true',
          bio: 'I feel like Pablo',
          // birthday: '06-04-1987 00:00:00'
        },
        {
          id: 3, 
          name: 'Matthew',
          username:'MattHocking2439',
          email_address: 'EDGEmaster69@eda.com',
          password: 'abc',
          profile_image: 'https://pbs.twimg.com/media/DwvaXrOX0AEIYh-.jpg',
          varified: 'true',
          bio: 'one man\'s trash is another man\'s treasure',
          // birthday: '06-04-1987 00:00:00'
        },
        {
          id: 4, 
          name: 'Max',
          username:'drdorsay',
          email_address: 'DrDorsaaay@eda.com',
          password: 'abc',
          profile_image: '/images/max-profile.png',
          varified: 'true',
          bio: 'what\'s twitter got? nothin on hihi',
          // birthday: '06-04-1987 00:00:00'
        },
        {
          id: 5, 
          name: 'Kang',
          username:'databasedGOD',
          email_address: 'databasedGOD@eda.com',
          password: 'abc',
          profile_image: '/images/kang-profile.png',
          varified: 'true',
          bio: 'ok you wan\'it you got\'it',
          // birthday: '06-04-1987 00:00:00'
        },
        {
          id: 6, 
          name: 'Jordan',
          username:'LordLiberator',
          email_address: 'lordLiberty6@eda.com',
          password: 'abc',
          profile_image: '/images/jordan-profile.png',
          varified: 'oh yeah true',
          bio: '🗽🗽🗽🗽🗽🗽🗽🗽',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 7, 
          name: 'Casey',
          username:'BaltoBoi420',
          email_address: 'baltoBoi420@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/17264889?v=4',
          varified: 'false',
          bio: '🐶 start-up slayer by day - hoochy pooch lover by night ❤️',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 8, 
          name: 'Shabu',
          username:'shaBuYaGIRL',
          email_address: 'shabuuYaaahGIRL@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/85987168?v=4',
          varified: 'false',
          bio: '🐒 🐵 🙈 🙉 🙊 🐒',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 9, 
          name: 'Anand',
          username:'MrWhittakers1337',
          email_address: 'blackForestWhittakers1337@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/85867929?v=4',
          varified: 'false',
          bio: 'NZ\'s finest choco 🍫 👅',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 10, 
          name: 'Juliet',
          username:'OragamiQueen',
          email_address: 'OragamiQueen@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/86028118?v=4',
          varified: 'false',
          bio: '🏮 yell at my kids & i will eat your heart 🥰 ',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 11, 
          name: 'Alex J',
          username:'LevinTheViDaLoca',
          email_address: 'LevinTheViDaLoca@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/83391885?v=4',
          varified: 'false',
          bio: '🚲',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 12, 
          name: 'Jo',
          username:'JoJoMammah2k12',
          email_address: 'JoJoMammah2k12@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/84287388?v=4',
          varified: 'false',
          bio: 'Don\'t find me where? Find me here --> 🌲🌴🌳',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 13, 
          name: 'Phill',
          username:'LemmePhillmyCup',
          email_address: 'LemmePhillmyCup@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/7622261?v=4',
          varified: 'false',
          bio: 'Sassy, classy, and bad-assy 💁',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 14, 
          name: 'Zoe',
          username:'ZoeRules',
          email_address: 'lordLiberty6@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/85871720?v=4',
          varified: 'false',
          bio: 'I lost the game, and now you have too 😅',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 15, 
          name: 'MattS',
          username:'MrSear1e',
          email_address: 'MrSear1e@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/5117628?v=4',
          varified: 'false',
          bio: 'BAE means bacon and eggs 🥓 🍳',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 16, 
          name: 'Oscar',
          username:'LegalWeapon007',
          email_address: 'LegalWeapon007@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/38869989?v=4',
          varified: 'false',
          bio: '💙💙💙 Holding hands 🤝 and long walks on the beach 🏖 💙💙💙',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 17,
          name: 'Tim',
          username:'YungMaru',
          email_address: 'YungMaru@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/85976318?v=4',
          varified: 'false',
          bio: 'Escherichia coli happens. ',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 18,
          name: 'AlexT',
          username: 'DjThom',
          email_address: 'DkThom@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/22038781?v=4',
          varified: 'false',
          bio: '🧑‍💻 Definitely in the top 10 coders in Invercargill 🧑‍💻',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 19, 
          name: 'Kho',
          username: 'SuperSaiyanKho',
          email_address: 'SuperSaiyanKho@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/35084881?v=4',
          varified: 'false',
          bio: '🤜  💨  💥',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 20, 
          name: 'Kelly',
          username:'chillest4lyfe',
          email_address: 'chillest4lyfe@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/25888248?v=4',
          varified: 'false',
          bio: 'give me a <br/> 😂',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 21, 
          name: 'Bren',
          username:'LordOfTheDrones',
          email_address: 'LordOfTheDrones0@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/978514?v=4',
          varified: 'false',
          bio: 'Sassy and classy but not !important 😉',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 22, 
          name: 'Emily',
          username:'Parkes+Recreation',
          email_address: 'Parkes+Recreation@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/30305644?v=4',
          varified: 'false',
          bio: '🌈 if (typeof you === "== user") {return friends.delete(you)} 🌈',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 23, 
          name: 'Kafele',
          username:'deKafenated',
          email_address: 'deKafenated@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/67259017?v=4',
          varified: 'false',
          bio: 'Happy Friday 🙌',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 24, 
          name: 'Rachie',
          username:'thanksRachie',
          email_address: 'thanksRachie@eda.com',
          password: 'abc',
          profile_image: 'https://images.squarespace-cdn.com/content/v1/57dc5028be6594df5a7d2f05/1571632738157-1YKZ7LZASFHU89OJMIHG/rachel_2019-5.jpg?format=750w',
          varified: 'false',
          bio: 'teaching you the skills to get ahead 😇',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 25, 
          name: 'Ming',
          username:'masterYogie',
          email_address: 'ma$terYogie@eda.com',
          password: 'abc',
          profile_image: 'https://humanskills.co.nz/images/eda-images/Ming.jpg',
          varified: 'false',
          bio: '🌞 🧘‍♀️🧘🧘‍♂️ 🌞',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 26, 
          name: 'Freya',
          username:'naturesfriend',
          email_address: 'naturesfriend@eda.com',
          password: 'abc',
          profile_image: 'https://cutt.ly/qEY9uwN',
          varified: 'false',
          bio: '🌲🌳🤑 Keepin\' it green 🤑🌳🌲',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 27, 
          name: 'Rohan',
          username:'MrEDA',
          email_address: 'MrEDA@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/14883201?v=4',
          varified: 'false',
          bio: '🌍🏆World champion civ 5 player🏆🌎',
          // birthday: '06-04-1987 00:00:06'
        },
        {
          id: 28, 
          name: 'Annie',
          username:'MrsEDA',
          email_address: 'MrsEDA@eda.com',
          password: 'abc',
          profile_image: 'https://avatars.githubusercontent.com/u/14883201?v=4',
          varified: 'false',
          bio: '😚💋🦆',
          // birthday: '06-04-1987 00:00:06'
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
