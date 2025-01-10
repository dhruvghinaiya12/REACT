import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Slide, toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";

const Form = () => {
  const [data, setData] = useState({
    task: "",
    date: "",
    iscompleted: false,
  });
  const [list, setList] = useState([]);
  const [id, setUpdateId] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.task.length > 0 && data.date.length > 0) {
      if (id) {
        setList(
          list.map((item) =>
            item.id === id
              ? { ...item, task: data.task, date: data.date }
              : item
          )
        );
        setUpdateId(null);
        toast.info("Task updated successfully!", {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
          transition: Slide,
        });
      } else {
        setList([...list, { ...data, id: Date.now() }]);
        toast.success("Task added successfully!", {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
          transition: Slide,
        });
      }

      setData({ task: "", date: "", iscompleted: false });
    } else {
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  const handleUpdate = (id) => {
    const updatedData = list.find((item) => item.id === id);
    setData({ task: updatedData.task, date: updatedData.date });
    setUpdateId(id);
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
    toast.error("Task deleted!", {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      transition: Slide,
    });
  };

  const handleStatus = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, iscompleted: !item.iscompleted } : item
      )
    );
    toast.info("Task status updated!", {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      transition: Slide,
    });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              name="task"
              value={data.task}
              onChange={handleInput}
              placeholder="Enter task"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              value={id ? "Update Task" : "Add Task"}
              className="btn btn-primary w-100"
            />
          </div>
        </div>
        <ToastContainer />
      </form>
      <div className="row">
        {list.map((ele) => (
          <div className="col-md-4 mb-3" key={ele.id}>
            <TodoItem
              {...ele}
              ondelete={handleDelete}
              onStatusChange={handleStatus}
              onUpdate={handleUpdate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
