const router = require('express').Router();
const sequlize = require('../config/connection');
const { User, Post } = require('../models');

router.get('/', (req, res) => {
  res.render('dashboard', {loggedIn: true})
})


module.exports = router