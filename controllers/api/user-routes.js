const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: [{ model: Post, include: { model: Comment } }, { model: Comment }],
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
    include: [{ model: Post, include: { model: Comment } }, { model: Comment }],
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
      req.session.save(() => {
        req.session.user_id = newUserData.id;
        req.session.usernmae = newUserData.username;
        req.session.loggedIn = true;

        res.json(newUserData);
      });
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
    req.session.save(() => {
      req.session.user_id = loginUserData.id;
      req.session.username = loginUserData.usename;
      req.session.loggedIn = true;

      res.json({ user: loginUserData, message: 'You are now logged in!' });
    });
  });
});

router.use('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
