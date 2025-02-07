const {Router}=require("express")
const UserRoutes=require("./UserRoute");

const Routes=Router();

Routes.use("/user",UserRoutes)


module.exports=Routes;