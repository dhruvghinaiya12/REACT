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

const TaskCard = ({ title, description, endDate, status, assignedBy, assignedTo, createdAt, role ,_id}) => {
  const nav=useNavigate();
  return (
    <div className="bg-white text-gray-900 p-5 rounded-lg shadow-lg border border-gray-200" onClick={()=>nav(`/task-details/${_id}`)}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="text-sm text-gray-500 space-y-1">
        <p>📅 End Date: {formatDate1(endDate)}</p>
        <p>📌 Status: <span className="font-semibold text-blue-600">{status}</span></p>
        <p>🕒 Created At: {formatDate1(createdAt)}</p>
        {role === "user" ? (
          <p>👤 Assigned By: <span className="font-semibold">{assignedBy?.name}</span></p>
        ) : (
          <p>👤 Assigned To: <span className="font-semibold">{assignedTo?.name}</span></p>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
