const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seed');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Data Seeded Succesfully');
  await seedUsers();
  console.log('Data Seeded Succesfully');
  await seedPosts();
  console.log('Data Seeded Succesfully');
  await seedComments();
  console.log('Data Seeded Succesfully');
  process.exit(0);
};

seedAll();
