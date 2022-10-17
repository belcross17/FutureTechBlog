const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'testSubject2',
    email: 'test20@email.com',
    password: 'password123'
  },
  {
    username: 'testSubject1',
    email: 'test@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;