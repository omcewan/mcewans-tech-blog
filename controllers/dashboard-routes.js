const router = require('express').Router();
const sequlize = require('../config/connection');
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');
const helpers = require('../utils/helpers');

router.get('/', withAuth, (req, res) => {
  let username;
  User.findOne({
    where: { id: req.session.user_id },
    attributes: ['username'],
  }).then((data) => {
    // console.log(data.get({plain: true}))
    const userData = data.get({ plain: true });
    username = userData.username;
  });
  Post.findAll({
    // use the ID from the session
    where: { user_id: req.session.user_id },
    attributes: ['id', 'title', 'post_contents', 'createdAt'],
    include: { model: User, attributes: ['username'] },
    order: [['id', 'DESC']],
  })
    .then((userData) => {
      const posts = userData.map((post) => post.get({ plain: true }));
      res.render('dashboard', { posts, username, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
