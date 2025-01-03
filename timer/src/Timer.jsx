import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Timer = () => {
  let [flag, setFlag] = useState(false);
  let [time, setTime] = useState(0);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  useEffect(() => {
    let id;
    if (flag) {
      id = setInterval(() => {
        if (hour == 0 && minute == 0 && second == 0) {
          clearInterval(id);
          setFlag(false);
        } else {
          if (second > 0) {
            setSecond(second - 1);
          } else if (minute > 0) {
            setSecond(59);
            setMinute(minute - 1);
          } else if (hour > 0) {
            setSecond(59);
            setMinute(59);
            setHour(hour - 1);
          }
        }
      }, 10);
    }

    return () => {
      clearInterval(id);
    };
  }, [second, flag]);

  const Convert = () => {
    if (flag) {
      setFlag(false);
      return;
    }

    if (hour == 0 && minute == 0 && second == 0 && time <= 0) {
      alert("Please enter a valid time to start the timer.");
      return;
    }

    if (time > 0 && hour == 0 && minute == 0 && second == 0) {
      const newTime = time / 60;
      setHour(Math.floor(newTime));
      setMinute(time % 60); 
      setSecond(0);    
    }
    setFlag(true);
  };

  const Reset = () => {
    setFlag(false);  
    setTime(0);      
    setHour(0);      
    setMinute(0);    
    setSecond(0);    
  };

  return (
    <div className="container text-center mt-5">
    <h1 className="mb-4">
      {(hour < 10 ? "0" : "") + hour}:
      {(minute < 10 ? "0" : "") + minute}:
      {(second < 10 ? "0" : "") + second}
    </h1>
    <div className="mb-3">
      <input
        type="number"
        className="form-control w-25 mx-auto"
        placeholder="Enter time in minutes"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
    </div>
    <div>
      <button 
        onClick={Convert} 
        className={`btn btn-${flag ? "danger" : "primary"} btn-lg me-2`}
      >
        {flag ? "Stop" : "Start"}
      </button>
      <button 
        onClick={Reset} 
        className="btn btn-secondary btn-lg"
      >
        Reset
      </button>
    </div>
  </div>
  );
};

export default Timer;
