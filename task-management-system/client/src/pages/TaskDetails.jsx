import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiLink from "../config/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formatDate1 = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const TaskDetails = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const GetTaskDetails = async () => {
    try {
      const res = await ApiLink.get(`/task/tasks/${id}`);
      setTask(res.data.tasks);
    } catch (error) {
      toast.error("Failed to fetch task details.");
    }
  };

  const GetTaskComments = async () => {
    try {
      const res = await ApiLink.get(`/status/task/comments/${id}`);
      setComments(res.data);
    } catch (error) {
      toast.error("Failed to fetch comments.");
    }
  };

  const AddComment = async () => {
    if (!text.trim()) return;

    try {
      await ApiLink.post("/status", { text, task: id });
      setText("");
      GetTaskComments();
      toast.success("Comment added successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Failed to add comment.");
    }
  };

  useEffect(() => {
    GetTaskDetails();
    GetTaskComments();
  }, []);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-6">
      <ToastContainer />
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
        {task && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {task.title}
            </h2>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Status:</span> {task.status}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">End Date:</span>{" "}
              {formatDate1(task.endDate)}
            </p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Add a Comment
          </h3>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            placeholder="Write your comment here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition w-full"
            onClick={AddComment}
          >
            Submit Comment
          </button>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Comments ({comments.length})
          </h3>
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-800">
                      {comment.user?.name || "Anonymous"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate1(comment.createdAt)}
                    </p>
                  </div>
                  <p className="text-gray-600 mt-1">{comment.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
