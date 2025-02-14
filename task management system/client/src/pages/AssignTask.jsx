import React, { useEffect, useState } from "react";
import ApiLink from "../config/API";

const AssignTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "",
    endDate: "",
  });
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let res = await ApiLink.get("/user/Alluser?role=user");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const PostTask = async () => {
    try {
      let res = await ApiLink.post("/task", task);
      console.log(res.data);
      alert("Task created");
    } catch (error) {
      console.log(error);
      alert("Task creation failed");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    PostTask();
    setTask({
      title: "",
      description: "",
      assignedTo: "",
      status: "",
      endDate: "",
    });
  };

  return (
    <div className="bg-blue-50 text-gray-900 h-[calc(100vh-60px)]">
      <h2 className="text-gray-800 text-2xl font-semibold pt-5 text-center">Assign Task</h2>
      <form onSubmit={handleSubmit} className="bg-white space-y-4 rounded-lg shadow-lg mt-8 max-w-lg mx-auto p-6 border-gray-200" >
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">Assigned To</label>
          <select
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
          >
            <option value="" disabled>
              Select User
            </option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input
            type="date"
            name="endDate"
            value={task.endDate}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AssignTask;
