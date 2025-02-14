const {Router}=require("express")
const taskcontroller=require("../controller/TaskController")
const TaskRoutes=Router();

TaskRoutes.post("/",taskcontroller.CreateTasks)

TaskRoutes.get("/:userId",taskcontroller.GetAllTasksByUserId)

TaskRoutes.get("/",taskcontroller.getAllTasks)


module.exports=TaskRoutes;