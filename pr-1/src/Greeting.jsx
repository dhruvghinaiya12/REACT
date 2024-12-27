import React from "react";

const Greeting = ({ name }) => {
  return (
    <div>
{name ? 
  <h1 style={{ textAlign: 'center' }}>Hello, {name}!</h1> : 
  <h1 style={{ textAlign: 'center'}}>Hello, amazing user! Welcome to our app! 😊</h1>
}
    </div>
  );
};

export default Greeting;
