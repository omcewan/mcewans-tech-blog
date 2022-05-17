const router = require('express').Router();
const { User, Post } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: {model: Post}
  })
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single user by id
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    include: { model: Post },
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res.status(400).json({ message: 'No User found with this ID!' });
        return;
      }
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUserData) => {
      res.json(newUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((updatedUserData) => {
      if (!updatedUserData[0]) {
        res.status(400).json({ message: 'No User found with this ID!' });
        return;
      }
      res.json(updatedUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      if (!deletedUser) {
        res.status(400).json({ message: 'No User found with this ID!' });
        return;
      }
      res.json(deletedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.use('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((loginUserData) => {
    if (!loginUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = loginUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    res.json({ user: loginUserData, message: 'You are now logged in!' });
  });
});

module.exports = router;
