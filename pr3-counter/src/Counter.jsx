import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = (opr, value) => {
    if (opr === "+") {
      setCount(count + value);
    } else {
      if (count > 0) {
        setCount(count - value);
      }
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Counter</h1>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-danger mx-2"onClick={() => handleCounter("-", 1)}>decrement</button>
        <span className="fs-3 mx-3">{count}</span>
        <button className="btn btn-success mx-2" onClick={() => handleCounter("+", 1)}> increment</button>
      </div>
    </div>
  );
};

export default Counter;
