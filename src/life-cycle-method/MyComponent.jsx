import React, { Component } from "react";

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Tý",
    };
  }

  handleChangeValue = () => {
    this.setState({ id: 2, name: "Tèo" });
  };

  goToGoogle = () => {
    window.location.href = "https://www.google.com/";
  };

  componentWillMount() {
    console.log("componentWillMount method invoked...");
  }

  render() {
    console.log("Render method invoked...");
    return (
      <React.Fragment>
        <h2>Id: {this.state.id}</h2>
        <h2>Name: {this.state.name}</h2>
        <button onClick={this.handleChangeValue}>Change value</button>
        <button onClick={this.goToGoogle}>Go to Google</button>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("componentDidMount method invoked...");
  }
}

export default MyComponent;
