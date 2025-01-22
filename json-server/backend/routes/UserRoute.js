const {Router}=require("express")
const UserController=require("../controller/UserController")

const UserRoutes=Router()

UserRoutes.post("/", UserController.CreateUser)
UserRoutes.get("/",UserController.GetAllUsers)
UserRoutes.patch("/:id",UserController.updateUser)
UserRoutes.delete("/:id",UserController.deleteUser)

module.exports = UserRoutes