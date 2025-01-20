import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Questions = () => {
  const [data, setData] = useState({
    question: "",
    answer: "",
  });
  const [questions, setQuestions] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const createQuestion = async () => {
    try {
      let res = await axios.post(
        "http://localhost:5000/api/v1/question/addQuestion",
        data
      );
      console.log(res.data);
      toast.success("Question Added Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      GetQuestions();
    } catch (error) {
      console.log(error);
    }
  };

  const GetQuestions = async () => {
    try {
      let res = await axios.get(
        "http://localhost:5000/api/v1/question/getAllQuestions"
      );
      setQuestions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuestion();
    setData({ question: "", answer: "" });
  };

  useEffect(() => {
    GetQuestions();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-50 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-center mb-4">Add Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="question"
              placeholder="Enter question"
              value={data.question}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="answer"
              placeholder="Enter answer"
              value={data.answer}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>

        <ToastContainer />
        <div className="mt-4">
          <h3>Questions List</h3>
          <div className="list-group">
            {questions.map((que, id) => (
              <div key={id} className="list-group-item mb-3">
                <h5 className="mb-2">Question: {que.question}</h5>
                <p><strong>Answer:</strong> {que.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
