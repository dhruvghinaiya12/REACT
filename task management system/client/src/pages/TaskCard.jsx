import React from "react";
import { useNavigate } from "react-router-dom";

const formatDate1 = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const TaskCard = ({ _id, title, description, status, endDate, role, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/task/update/${_id}`);
  };


  return (
    <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition duration-200">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 mb-1">Status: {status}</p>
      <p className="text-gray-500 mb-4">End Date: {formatDate1(endDate)}</p>

      <div className="flex gap-4">
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Edit
        </button>

        {role === "admin" && (
          <button
            onClick={onDelete}  
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
