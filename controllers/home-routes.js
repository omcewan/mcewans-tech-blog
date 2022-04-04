const router = require('express').Router();
const sequlize = require('../config/connection');
const { User, Post } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'post_contents', 'createdAt'],
    include: { model: User, attributes: ['username']},
  }).then(postData => {
    const posts = postData.map(post => post.get({plain: true}))
    res.render('homepage', {posts});
  })
});

module.exports = router;
