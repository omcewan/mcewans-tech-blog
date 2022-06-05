const router = require('express').Router();
const res = require('express/lib/response');
const sequlize = require('../config/connection');
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: ['id', 'title', 'post_contents', 'createdAt'],
    include: { model: User, attributes: ['username'] },
  })
    .then((postData) => {
      console.log(postData);
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = postData.get({ plain: true });

      // pass data to template
      res.render('edit-post', {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
