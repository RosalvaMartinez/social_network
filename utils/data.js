const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

  const emails = [
    'Aaran@yahoo.com',
    'Aaren@yahoo.com',
    'Aarez@yahoo.com',
    'Aarman@yahoo.com',
    'Aaron@yahoo.com',
    'Aaron-James@yahoo.com',
    'Aarron@yahoo.com',
    'Aaryan@yahoo.com',
    'Aaryn@yahoo.com',
    'Aayan@yahoo.com',
    'Aazaan@yahoo.com',
    'Abaan@yahoo.com',
    'Abbas@yahoo.com',
    'Abdallah@yahoo.com',
    'Abdalroof@yahoo.com',
    'Abdihakim@yahoo.com',
    'Abdirahman@yahoo.com',
    'Abdisalam@yahoo.com',
    'Abdul@yahoo.com',
    'Abdul-Aziz@yahoo.com',
    'Abdulbasir@yahoo.com',
    'Abdulkadir@gmail.com',
    'Abdulkarem@gmail.com',
    'Smith@gmail.com',
    'Jones@gmail.com',
    'Coollastname@gmail.com',
    'enter_name_here@gmail.com',
    'Ze@gmail.com',
    'Zechariah@gmail.com',
    'Zeek@gmail.com',
    'Zeeshan@gmail.com',
    'Zeid@gmail.com',
    'Zein@hotmail.com',
    'Zen@hotmail.com',
    'Zendel@hotmail.com',
    'Zenith@hotmail.com',
    'Zennon@hotmail.com',
    'Zeph@hotmail.com',
    'Zerah@hotmail.com',
    'Zhen@hotmail.com',
    'Zhi@hotmail.com',
    'Zhong@hotmail.com',
    'Zhuo@hotmail.com',
    'Zi@hotmail.com',
    'Zidane@hotmail.com',
    'Zijie@hotmail.com',
    'Zinedine@hotmail.com',
    'Zion@hotmail.com',
    'Zishan@hotmail.com',
    'Ziya@hotmail.com',
    'Ziyaan@hotmail.com',
    'Zohaib@hotmail.com',
    'Zohair@hotmail.com',
    'Zoubaeir@aol.com',
    'Zubair@aol.com',
    'Zubayr@aol.com',
    'Zuriel@aol.com',
    'Xander@aol.com',
    'Jared@aol.com',
    'Grace@aol.com',
    'Alex@aol.com',
    'Mark@aol.com',
    'Tamar@aol.com',
    'Farish@aol.com',
    'Sarah@aol.com',
    'Nathaniel@aol.com',
    'Parker@aol.com',
  ];
  
  const thoughtDescriptions = [
    'Decision Tracker',
    'Find My Phone',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense',
    'Monopoly Money Manager',
    'Movie trailers',
    'Hello world',
    'Stupid Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
  ];
  
  const possibleReactions = [
    'love',
    'dislike',
    'like',
    'awesome',
    'funny',
    'great',
  ];
  
const ids = [
  '63feda30f4206d308e23660a',
  '63feda30f4206d308e23660b',
  '63feda30f4206d308e23660c',
  '63feda30f4206d308e23660d',
  '63feda30f4206d308e23660e',
  '63feda30f4206d308e23660f',
  '63feda30f4206d308e23660g',
  '63feda30f4206d308e23660h',
  '63feda30f4206d308e23660i'
]

const thoughtIds = [
  '63fed1bb1eb28bd321d11492',
  '63fed1bb1eb28bd321d11493',
  '63fed1bb1eb28bd321d11494',
  '63fed1bb1eb28bd321d11495',
  '63fed1bb1eb28bd321d11496',
  '63fed1bb1eb28bd321d11497',
  '63fed1bb1eb28bd321d11498',
  '63fed1bb1eb28bd321d11499'
]

  const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)}`;
  
  //Get random email in user email
  const getRandomEmails = () =>
    `${getRandomArrItem(emails)}`

     //Get random id in user friends
  const getRandomFriends = () =>
  `${getRandomArrItem(ids)}`

   //Get random thought in user 
   const getRandomThoughtIds = () =>
   `${getRandomArrItem(thoughtIds)}`

  // Function to generate random thoughts that we can add to the database. Includes thought reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtDescriptions),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the reactions that will be added to each thought
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts, getRandomEmails, getRandomFriends, getRandomThoughtIds };
  