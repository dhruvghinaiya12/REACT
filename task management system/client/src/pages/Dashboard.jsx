import React, { useEffect, useState } from "react";
import { UserToken } from "../UserToken";
import ApiLink from "../config/API";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [task, SetTask] = useState([]);
  let user = UserToken();
console.log(user);

  const GetTask = async () => {
    if (user) {
      let res = user.role === "admin"
        ? await ApiLink.get(`/task?assignedBy=${user.id}`)
        : await ApiLink.get(`/task?assignedTo=${user.id}`);
      console.log(res.data);
      
      SetTask(res.data);
    }
  };

  useEffect(() => {
    GetTask();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="container mx-auto">
        <h2 className="text-gray-800 text-2xl text-center font-semibold mb-4">Dashboard</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {task.length > 0 ? (
            task.map(task => (
              <TaskCard {...task} key={task._id} role={user.role} />
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
