import React, { useEffect, useState } from "react";
import ApiLink from "../config/API";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    endDate: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await ApiLink.get(`/task/tasks/${id}`);
        setTask(res.data.tasks);
      } catch (error) {
        toast.error(error.message || "Failed to fetch task details", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiLink.put(`/task/tasks/${id}`, task);

      toast.success("Task updated successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error(error.message || "Failed to update task!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 rounded-lg shadow-md mt-10"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Update Task</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task description"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={task.endDate ? task.endDate.split("T")[0] : ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
