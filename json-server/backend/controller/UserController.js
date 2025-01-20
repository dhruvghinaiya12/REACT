const User = require("../model/UserSchema")

exports.CreateUser=async(req,res)=>{
    let user=await User.create(req.body)
    res.status(201).json(user)
}