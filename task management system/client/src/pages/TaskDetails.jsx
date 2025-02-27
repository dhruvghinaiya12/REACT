import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiLink from "../config/API";

const TaskDetails = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const { id } = useParams();
  
  console.log(id);

  const GetTaskDetails = async () => {
    try {
      let res = await ApiLink.get(`/task/tasks/${id}`);
      console.log("API Response:", res.data);
      setTask(res.data.tasks);
    } catch (error) {
      console.log("Error Getting Task", error);
    }
  };

  const AddComment = async () => {
    if (!text.trim()) return; 

    let comment = {
      text,
      task: id,
    };

    try {
      let res = await ApiLink.post("/status", comment);
      console.log(res.data);
      setText(""); 
    } catch (error) {
      console.log("Error Adding Comment", error);
    }
  };

  useEffect(() => {
    GetTaskDetails();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Task Details</h2>

      {task ? (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
        </div>
      ) : (
        <p>Loading task details...</p>
      )}

      <div className="mt-6">
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={AddComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
