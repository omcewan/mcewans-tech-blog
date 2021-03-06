const router = require('express').Router();
const { User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
  Post.findAll({
    include:[ {
      model: User,
      attributes: { exclude: ['password'] },
    }, {model: Comment}],
  })
    .then((postData) => {
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    include: [{ model: User, attributes: { exclude: ['password'] } }, {model: Comment}],
  }).then((postData) => {
    if (!postData) {
      res.status(400).json({ message: 'No Post found with that ID!' });
      return;
    }
    res.json(postData);
  });
});

router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_contents: req.body.post_contents,
    user_id: req.session.user_id,
  })
    .then((newPostData) => {
      res.json(newPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(req.body, { where: { id: req.params.id } })
    .then((updatedPostData) => {
      if (!updatedPostData[0]) {
        res.status(400).json({ message: 'No Post found with that ID!' });
        return;
      }
      res.json(updatedPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPostData) => {
      if (!deletedPostData) {
        res.status(400).json({ message: 'No Post found with that ID!' });
        return;
      }
      res.json(deletedPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
