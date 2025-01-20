import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Exam = () => {
  const [data, setData] = useState({
    title: "",
    marks: "",
    startingTime: "",
    endingTime: ""
  });

  const [exams, setExams] = useState([]); 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const CreateQuestion = async () => {
    try {
      let res = await axios.post("http://localhost:5000/api/v1/exam/addExam", data);
      console.log(res.data);
      toast.success("Exam Added Successfully", {
        position: "top-center",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,  
        pauseOnHover: true, 
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      GetExam(); 
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateQuestion();
    setData({ title: "", marks: "", startingTime: "", endingTime: "" });
  };

  const GetExam = async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/v1/exam/getExam");
      setExams(res.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetExam(); 
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-50 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-center mb-4">Add Exam</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleInput}
              placeholder="Enter exam title"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="marks"
              value={data.marks}
              onChange={handleInput}
              placeholder="Enter total marks"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              name="startingTime"
              value={data.startingTime}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              name="endingTime"
              value={data.endingTime}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        <ToastContainer />

        <div className="mt-4">
          <h3>Exams List</h3>
          <ul className="list-group">
            {exams.map((exam,id) => (
              <li key={id} className="list-group-item mb-2">
                <h5>{exam.title}</h5>
                <p>Marks: {exam.marks}</p>
                <p>Start Time: {exam.startingTime}</p>
                <p>End Time: {exam.endingTime}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exam;
