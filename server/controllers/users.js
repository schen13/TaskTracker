const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

router.get('/', (req, res) => {
  User.find({}).then(users => {
    const usersInfo = {};
    users.forEach(user => {
      usersInfo[user._id] = {
        id: user._id,
        username: user.username,
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        groups: user.groups,
        tasks: user.tasks,
        chats: user.chats
      };
    });
    return res.json(usersInfo);
  });
});

router.get('/:id', (req, res) => {

  User.findOne({ _id: req.params.id }).then(user => {
    if (user) {
      res.send({
        id: user._id,
        username: user.username,
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        groups: user.groups,
        tasks: user.tasks,
        chats: user.chats
      });
    }
  });
});

router.post('/register', (req, res) => {
  // Check to make sure nobody has already registered with a duplicate email
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: 'A user has already registered with this address' })
      } else {
        // Otherwise create a new user

        const newUser = new User({
          fName: req.body.fName,
          lName: req.body.lName,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.log(err);
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = {
                  id: user.id,
                  username: user.username,
                  fName: req.body.fName,
                  lName: req.body.lName,
                  email: req.body.email
                };

                jsonwebtoken.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  }
                );
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});

router.post('/', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              username: user.username,
              fName: req.body.fName,
              lName: req.body.lName,
              email: req.body.email
            };

            jsonwebtoken.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        });
    });
});

module.exports = router;