const TaskComment = require("../schema/TaskCommentSchema")
const Task = require("../schema/TaskSchema")

exports.CreateTasks=async(req,res)=>{
    req.body.assignedBy=req.user.id
    let task=await Task.create(req.body)
   return res.send(task)
}

exports.GetAllTasksByUserId=async(req,res)=>{
let {userId}=req.params
    let tasks=await Task.find({assignedTo:userId})
   return res.send(tasks)
}

exports.getAllTasks=async(req,res)=>{
    let query=req.query || {};
    let tasks=await Task.find(query).populate("assignedBy","name").populate("assignedTo","name")
    return res.send(tasks)
}

exports.GetTaskById=async(req,res)=>{
    const { taskId } = req.params;
    let tasks = await Task.findById(taskId).populate("assignedBy","name").populate("assignedTo","name")
    let status=await TaskComment.find({task:taskId})
    return res.json({tasks,status})
}

exports.UpdateTask = async (req, res) => {
    const { taskId } = req.params;
    const updates = req.body;
    let updatedTask = await Task.findByIdAndUpdate(taskId, updates, { new: true });
    return res.send(updatedTask);
};

exports.DeleteTask = async (req, res) => {
    const { taskId } = req.params;
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Only admin can delete tasks." });
    }
    await Task.findByIdAndDelete(taskId);
    return res.json({ message: "Task deleted successfully." });
};
