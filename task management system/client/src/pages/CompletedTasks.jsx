import React, { useEffect, useState } from "react";
import ApiLink from "../config/API";
import TaskCard from "../components/TaskCard";

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchCompletedTasks = async () => {
    try {
      const res = await ApiLink.get("/task?status=completed");

      if (JSON.stringify(tasks) !== JSON.stringify(res.data)) {
        setTasks(res.data);
      }
    } catch (error) {
      setErrorMessage("Failed to load tasks!");
    }
  };

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Completed Tasks</h2>

      {errorMessage && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              {...task}
              key={task._id}
              refreshTasks={fetchCompletedTasks}
            />
          ))
        ) : (
          <p className="text-gray-600">No completed tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;
