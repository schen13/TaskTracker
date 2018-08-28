import Group from '../models/group';
import validateGroupInput from '../validation/group';

export const getGroups = (req, res) => {
  Group.find({ userList: req.user._id }, (err, groups) => {
    if (err) return res.status(404).send({ error: err });
    return res.json({
      success: true,
      groups
    });
  });
};

export const getGroup = (req, res) => {
  const { groupId } = req.params;
  Group.findOne({ _id: groupId }, (group) => {
    if (!group) return res.status(404).send({
      success: false,
      error: 'Group not found'
    });
    return res.json({
      success: true,
      group
    });
  });
};

export const createGroup = (req, res) => {
  const { errors, isValid } = validateGroupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newGroup = new Group(req.body);
  newGroup.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, newGroup });
  });
};

export const updateGroup = (req, res) => {
  const { errors, isValid } = validateGroupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { groupId } = req.params;
  if (!groupId) return res.json({ success: false, error: 'No group ID provided' });
  Group.findOneAndUpdate(
    { _id: groupId }, req.body, { new: true }, (group) => {
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
};

export const deleteGroup = (req, res) => {
  const { groupId } = req.params;
  if (!groupId) return res.json({ success: false, error: 'No group ID provided' });
  Group.findOneAndDelete({ _id: groupId }, (group) => {
    if (!group) return res.json({
      success: false,
      error: 'Group not found'
    });
    return res.json({
      success: true,
      group
    });
  });
};