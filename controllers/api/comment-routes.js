const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({
    include: [
      { model: User, attributes: { exclude: ['password'] } },
      { model: Post },
    ],
  })
    .then((commentData) => res.json(commentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      { model: User, attributes: { exclude: ['password'] } },
      { model: Post },
    ],
  })
    .then((commentData) => {
      if (!commentData) {
        res
          .status(400)
          .json({ 'message:': 'No comment with that id was found' });
        return;
      }
      res.json(commentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Comment.create({
    comment_contents: req.body.comment_contents,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  })
    .then((commentData) => {
      res.json(commentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: { id: req.params.id },
  })
    .then((commentData) => {
      if (!commentData) {
        res.status(400).json({ message: 'No Comment found with that ID!' });
        return;
      }
      res.json(commentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
