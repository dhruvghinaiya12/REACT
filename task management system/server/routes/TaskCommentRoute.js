const { Router } = require("express");
const TaskCommmentController=require("../controller/TaskComment")

const TaskCommentRoutes = Router();
TaskCommentRoutes.post("/",TaskCommmentController.Taskcommnet);

module.exports = TaskCommentRoutes;