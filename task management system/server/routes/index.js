const {Router}=require("express")
const UserRoutes=require("./UserRoute");
const TaskRoutes = require("./TaskRoute");

const Routes=Router();

Routes.use("/user",UserRoutes)
Routes.use("/task",TaskRoutes)


module.exports=Routes;