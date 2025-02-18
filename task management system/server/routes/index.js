const {Router}=require("express")
const UserRoutes=require("./UserRoute");
const TaskRoutes = require("./TaskRoute");
const TaskCommentRoutes = require("./TaskCommentRoute");

const Routes=Router();

Routes.use("/user",UserRoutes)
Routes.use("/task",TaskRoutes)
Routes.use("/status", TaskCommentRoutes);


module.exports=Routes;