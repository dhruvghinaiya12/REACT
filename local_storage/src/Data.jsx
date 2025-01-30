import React, { useState, useRef, useEffect } from "react";

const Data = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setdata(storedData);
  }, []);


  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const NewData = {
      name: nameRef.current.value,
      age: ageRef.current.value,
    };

    let temp = [...data, NewData];
    setdata(temp);
    localStorage.setItem("data", JSON.stringify(temp));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" ref={ageRef} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      {data.map((item,index) => (
        <div key={index}>
          Name: {item.name}, Age: {item.age}
        </div>
      ))}
    </div>
    
  );
};

export default Data;
