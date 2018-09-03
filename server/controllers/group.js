const Group = require('../models/group');
// import validateGroupInput from '../validation/group';

exports.getGroups = [
  function (req, res) {
    Group.find({}, (err, groups) => {
      if (err) return res.status(404).send({ error: err });
      return res.json({
        success: true,
        groups
      });
    });
  }
];

exports.getGroup = [
  function (req, res) {
    const { groupId } = req.params;
    Group.findOne({ _id: groupId }, (err, group) => {
      if (!group) return res.status(404).send({
        success: false,
        error: 'Group not found'
      });
      return res.json({
        success: true,
        group
      });
    });
  }
];

exports.createGroup = [
  function (req, res) {
    // const { errors, isValid } = validateGroupInput(req.name);
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    const newGroup = new Group({
      name: req.body.name,
      imageUrl: "",
      users: req.body.users,
      tasks: []
    });
    newGroup.save().then(group => {
      res.json({
        success: true,
        group
      });
    }, err => {
      res.status(400).send(err);
    });
  }
];

exports.updateGroup = [
  function (req, res) {
    // const { errors, isValid } = validateGroupInput(req.body);
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    const { groupId } = req.params;
    if (!groupId) return res.json({ success: false, error: 'No group ID provided' });
    Group.findOneAndUpdate(
      { _id: groupId }, req.body, { new: true }, (err, group) => {
        if (!group) return res.status(404).send({
          success: false,
          error: 'Group not found'
        });
        return res.json({
          success: true,
          group
        });
      }
    );

  }
];

exports.deleteGroup = [
  function (req, res) {
    const { groupId } = req.params;
    if (!groupId) return res.json({ success: false, error: 'No group ID provided' });
    Group.findOneAndDelete({ _id: groupId }, (err, group) => {
      if (!group) return res.json({
        success: false,
        error: 'Group not found'
      });
      return res.json({
        success: true,
        group
      });
    });
  }
];