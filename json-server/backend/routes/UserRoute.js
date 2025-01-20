const {Router}=require("express")
const UserController=require("../controller/UserController")

const UserRoutes=Router()

UserRoutes.post("/", UserController.CreateUser)

module.exports = UserRoutes