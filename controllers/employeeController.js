
const express = require('express');
const router = express.Router();

const users = require('../data');
const loggedUser = require('../user');

router.get('/', (req, res) => {
  res.render('employee/index');
});

router.get('/MyProfile', (req, res) => {
  // const username = loggedUser.user;
  const username = 'test';
  const user = users.find((user) => user.username === username);

  res.render('employee/myProfile', { user });
});

router.get('/UpdateProfile', (req, res) => {
  res.render('employee/updateProfile');
});


module.exports = router;
