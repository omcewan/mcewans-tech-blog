const { Comment } = require('../models');

const commentData = [
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 3,
    post_id: 3,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 4,
    post_id: 4,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 5,
    post_id: 5,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 1,
    post_id: 6,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 2,
    post_id: 7,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 3,
    post_id: 8,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 4,
    post_id: 9,
  },
  {
    comment_contents:
      'nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget',
    user_id: 5,
    post_id: 10,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
