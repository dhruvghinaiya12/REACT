const TaskComment = require("../schema/TaskCommentSchema");

exports.Taskcommnet = async (req, res) => {
  req.body.user = req.user.id;
  let comment = await TaskComment.create(req.body);
  res.json(comment);
};
