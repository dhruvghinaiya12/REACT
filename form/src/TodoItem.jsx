import React from "react";

const TodoItem = ({ task, date, iscompleted, id, ondelete, onStatusChange, onUpdate }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{task}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <button
          onClick={() => onStatusChange(id)}
          className={`btn btn-sm ${iscompleted ? "btn-success" : "btn-warning"} me-2`}
        >
          {iscompleted ? "Completed" : "Pending"}
        </button>
        <button onClick={() => onUpdate(id)} className="btn btn-sm btn-info me-2">
          Update
        </button>
        <button onClick={() => ondelete(id)} className="btn btn-sm btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
