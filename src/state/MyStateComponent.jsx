import React, { Component } from "react";

export class MyStateComponent extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: "Tý",
    };
  }

  render() {
    setTimeout(() => this.setState({ id: 2, name: "Tèo" }), 3000);
    return (
      <React.Fragment>
        <h2>Id: {this.state.id}</h2>
        <h2>Name: {this.state.name}</h2>
      </React.Fragment>
    );
  }
}

export default MyStateComponent;
