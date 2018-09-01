const Task = require('../models/task');

exports.getUserTasks = [
  function (req, res, next) {
    Task.find({
    }).then((tasks) => {
      res.send({
        tasks
      });
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.getTask = [
  function (req, res, next) {
    const id = req.params.id;

    Task.findOne({
      _id: id
    }).then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send({
        task
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.deleteTask = [
  function (req, res, next) {
    const id = req.params.id;

    Task.findOneAndRemove({
      _id: id,
    }).then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send({
        task
      });

    }).catch(e => {
      res.status(400).send();
    });
  }
];

exports.addTask = [
  function (req, res, next) {
    const task = new Task({
      name: req.body.name,
      description: req.body.description,
      groupId: req.body.groupId,
      userId: req.body.userId,
      deadline: req.body.deadline,
      estTime: req.body.estTime,
      completed: false
    });

    task.save().then((newTask) => {
      res.send(newTask);
    }, e => {
      res.status(400).send(e);
    });
  }
];

exports.updateTask = [
  function (req, res, next) {
    const id = req.params.id;

    Task.findOne({
      _id: id,
    }).then((task) => {
      if(!task) {
        return res.status(404).send();
      }
      task.name = req.body.name;
      task.description = req.body.description;
      task.deadline = req.body.deadline;
      task.estTime = req.body.estTime;
      task.completed = req.body.completed;
      task.userId = req.body.userId;

      task.save().then((updatedTask) => {
        res.send(updatedTask);
      }, e => {
        res.status(400).send(e);
      });
    });
  }
];