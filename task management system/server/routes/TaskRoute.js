const {Router}=require("express")
const taskcontroller=require("../controller/TaskController")
const TaskRoutes=Router();

TaskRoutes.post("/",taskcontroller.CreateTasks)

TaskRoutes.get("/",taskcontroller.GetAllTasks)


module.exports=TaskRoutes;