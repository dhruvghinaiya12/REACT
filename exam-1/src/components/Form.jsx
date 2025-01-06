import React, { useState } from "react";
import Timer from "./Timer";


const Form = () => {
  const [data, setData] = useState({
    food: "",
    title: "",
    price: "",
  });

  const [list, setList] = useState([]); 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setList([...list, { ...data, id: Date.now() }]);

    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="food"
          value={data.food} 
          onChange={handleInput}
          placeholder="Enter food"
        />
        <input
          type="text"
          name="title"
          value={data.title} 
          onChange={handleInput}
          placeholder="Enter title"
        />
        <input
          type="number"
          name="price"
          value={data.price} 
          onChange={handleInput}
          placeholder="Enter price"
        />
        <input type="submit" value="Add Item" />
      </form>
      {list.length > 0 && <Timer duration={30} />}

      {list.map(({ food, title, price, id }) => (
     
        <div key={id}>
     
          <h1>{food}</h1>
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Form;
