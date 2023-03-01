const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomEmails, getRandomFriends, getRandomThoughtIds} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = getRandomEmails();
    // const friends = []
    // const thoughts = []
    // friends.push(getRandomFriends());
    // thoughts.push(getRandomThoughtIds());
    

    users.push({
      username,
      email,
      friends: [getRandomFriends()],
      thoughts: [getRandomThoughtIds()]
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
