const {Router}=require("express")
const taskcontroller=require("../controller/TaskController")
const TaskRoutes=Router();

TaskRoutes.post("/",taskcontroller.CreateTasks)

TaskRoutes.get("/users/:userId",taskcontroller.GetAllTasksByUserId)

TaskRoutes.get("/",taskcontroller.getAllTasks)

TaskRoutes.get("/tasks/:taskId",taskcontroller.GetTaskById)


module.exports=TaskRoutes;