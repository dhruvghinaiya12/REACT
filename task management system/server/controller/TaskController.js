const Task = require("../schema/TaskSchema")

exports.CreateTasks=async(req,res)=>{
    req.body.assignedBy=req.user.id
    let task=await Task.create(req.body)
    res.send(task)
}

exports.GetAllTasks=async(req,res)=>{
let {userId}=req.params
    let tasks=await Task.find({assignedTo:userId})
    res.send(tasks)
}

