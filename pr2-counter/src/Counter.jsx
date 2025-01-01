import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const increment=()=>{
      this.setState({count: this.state.count+1})
    }
    const decrement=()=>{
      if(this.state.count>0){
        this.setState({count: this.state.count-1})
      }
    }
    return (
      <div className="container text-center mt-5">
        <h1 className="mb-4 text-secondary">Counter</h1>
        <h2 className="display-4">{this.state.count}</h2>
        <div className="mt-3">
          <button onClick={decrement} className="btn btn-danger mx-2">
            Decrement
          </button>
          <button onClick={increment} className="btn btn-success mx-2">
            Increment
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
