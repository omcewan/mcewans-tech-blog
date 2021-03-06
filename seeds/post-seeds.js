const { Post } = require('../models');
// const sequelize = require('../config/connection');

const postData = [
  {
    title: 'In hac habitasse platea dictumst.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 3,
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 1,
  },
  {
    title: 'Donec dapibus.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 1,
  },
  {
    title: 'Nulla tellus.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 3,
  },
  {
    title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 3,
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 2,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 4,
  },
  {
    title: 'Etiam justo.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 4,
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 3,
  },
  {
    title:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
