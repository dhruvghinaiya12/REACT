const {Router}=require("express")
const usercontroller=require("../controller/UserController")
const UserRoutes=Router();

UserRoutes.post("/signup",usercontroller.CreateUser)

UserRoutes.post("/login",usercontroller.LoginUser)

UserRoutes.get("/Alluser",usercontroller.GetAllUsers)


module.exports=UserRoutes;