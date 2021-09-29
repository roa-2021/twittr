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
          bio: 'My 🤸‍♂️BODY🏋️‍♀️ is a 🚂𝐌𝐀𝐂𝐇𝐈𝐍𝐄🚂 that turns 🐄𝒹𝒶𝒾𝓇𝓎 𝓅𝓇𝑜𝒹𝓊𝒸𝓉𝓈🥛 into ➡ 🔥ⓈⓅⒾⒸⓎ🔥 🐳𝓁𝒾𝓆𝓊𝒾𝒹💦 💩💩𝔻𝕀𝔸ℝℝℍ𝔼𝔸💪💪',
          // birthday: '06-04-1987 00:00:00'
        },
        {
          id: 3, 
          name: 'Matthew',
          username:'X_EDGE_Lord69_X',
          email_address: 'EDGEmaster69@eda.com',
          password: 'abc',
          profile_image: 'https://pbs.twimg.com/media/DwvaXrOX0AEIYh-.jpg',
          varified: 'true',
          bio: 'one man\'s trash is another\'s treasure',
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
          profile_image: 'data:image/jpeg;base64,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',
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
