const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.get("/test", (req, res) => res.json({msg: "This is the users route"}));

router.post('/register', (req, res) => {
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // Otherwise create a new user
        console.log(req)
        console.log(req.body)
        console.log(req.body.name)
        console.log(req.body.email)
        console.log(req.body.password)
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
    if (err) throw err;
    newUser.password = hash;
    newUser.save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  })
})
      }
    })
})

module.exports = router;
