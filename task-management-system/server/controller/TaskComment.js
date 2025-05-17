const TaskComment = require("../schema/TaskCommentSchema");

exports.Taskcommnet = async (req, res) => {
  req.body.user = req.user.id;
  let comment = await TaskComment.create(req.body);
  res.json(comment);
};

exports.getTaskComments = async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await TaskComment.find({ task: id }).populate("user", "name");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
};
