import React, { Component } from "react";

class Test extends Component {
  state = {
    users: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/post/1")
      .then(response => response.json())
      .then(data => this.setState9({}));
  }
  render() {
    return <div />;
  }
}

export default Test;
