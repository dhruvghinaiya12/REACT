import React, { useEffect, useState } from "react";
import { UserToken } from "../UserToken";
import ApiLink from "../config/API";
import { useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [task, SetTask] = useState([]);
  const navigate = useNavigate();
  let user = UserToken();

  const GetTask = async () => {
    if (user) {
      try {
        let res =
          user.role === "admin"
            ? await ApiLink.get(`/task?assignedBy=${user.id}`)
            : await ApiLink.get(`/task?assignedTo=${user.id}`);

        SetTask(res.data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch tasks", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  useEffect(() => {
    GetTask();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await ApiLink.delete(`/task/tasks/${_id}`);
      toast.success("Task deleted successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      GetTask(); 
    } catch (error) {
      toast.error(error.message || "Failed to delete the task!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const pendingTasks = task.filter((t) => t.status !== "completed");

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-gray-800 text-2xl font-semibold">Dashboard</h2>
          <button
            onClick={() => navigate("/completed-tasks")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            View Completed Tasks
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task) => (
              <TaskCard
                {...task}
                key={task._id}
                role={user.role}
                refreshTasks={GetTask}
                onDelete={() => handleDelete(task._id)}  
              />
            ))
          ) : (
            <p className="text-gray-600 text-center">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
