import React, { Component } from "react";

export class ClassComponent extends Component {
  handleClick = () => {
    console.log("Hello World!!!");
  };
  render() {
    const greeting = "Hello C07, Welcome to Class Component!";
    return (
      <Headline
        onClick={this.handleClick}
        value={greeting}
        name={"Dat Truong"}
      />
    );
  }
}

class Headline extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.value}</h2>
        <h2>{this.props.name}</h2>
      </React.Fragment>
    );
  }
}

export default ClassComponent;
