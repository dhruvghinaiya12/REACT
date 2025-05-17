const { Router } = require("express");
const TaskCommmentController=require("../controller/TaskComment")

const TaskCommentRoutes = Router();
TaskCommentRoutes.post("/",TaskCommmentController.Taskcommnet);
TaskCommentRoutes.get("/task/comments/:id", TaskCommmentController.getTaskComments);


module.exports = TaskCommentRoutes;