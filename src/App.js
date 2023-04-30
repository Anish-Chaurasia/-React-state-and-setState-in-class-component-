import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "peter", count: 0 }; // here state is an object that have name and count
  }

  // setState() function is used to update the state  when we call the update function
  update() {
    this.setState({ name: "anish", count: this.state.count + 1 });
  }

  // initialy it will render the peter and 0 but after clicking on the button it will update the state
  // when user click on the buttton it will update the state with new value

  render() {
    return (
      <div className="container">
        <h1>name is {this.state.name}</h1>
        <h1>age is {this.state.count}</h1>
        <button
          onClick={() => {
            this.update();
          }}
        >
          update here
        </button>
      </div>
    );
  }
}

export default App;
