const Chore = require('../models/chore');
const User = require('../models/user');

exports.getChores = [
  function (req, res, next) {
    Chore.find({
      userId: req.user._id
    }).then((chores) => {
      res.send({
        chores
      });
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.getChore = [
  function (req, res, next) {
    const id = req.params.id;

    Chore.findOne({
      _id: id,
      userId: req.user._id
    }).then((chore) => {
      if (!chore) {
        return res.status(404).send();
      }
      res.send({
        chore
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.deleteChore = [
  function (req, res, next) {
    const id = req.params.id;

    Chore.findOneAndRemove({
      _id: id,
      userId: req.user._id
    }).then((chore) => {
      if (!chore) {
        return res.status(404).send();
      }
      res.send({
        chore
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.addChore = [
  function (req, res, next) {
    const chore = new Chore({
      name: req.body.name,
      description: req.body.description,
      userId: req.user._id,
      deadline: req.body.deadline,
      estTime: req.body.estTime,
      completed: false
    });

    chore.save().then((newChore) => {
      res.send(newChore);
    }, e => {
      res.status(400).send(e);
    });
  }
];