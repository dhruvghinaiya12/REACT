import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <h1 className="mb-4 text-secondary">Counter</h1>
        <h2 className="display-4">{this.state.count}</h2>
        <div className="mt-3">
          <button onClick={this.decrement} className="btn btn-danger mx-2">
            Decrement
          </button>
          <button onClick={this.increment} className="btn btn-success mx-2">
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
