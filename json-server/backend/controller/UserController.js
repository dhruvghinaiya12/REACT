const User = require("../model/UserSchema")

exports.CreateUser=async(req,res)=>{
    let user=await User.create(req.body)
    res.status(201).json(user)
}

exports.GetAllUsers=async(req,res)=>{
    let users=await User.find()
    res.json(users)
}

exports.deleteUser=async(req,res)=>{
    let {id}=req.params
    let user=await User.findByIdAndDelete(id)
    res.json(user)
}

exports.updateUser=async(req,res)=>{
    let {id}=req.params
    let user=await User.findByIdAndUpdate(id,req.body,{new:true})
    res.json(user)
}