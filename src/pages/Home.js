import React, { Component } from "react";
class Home extends Component {
  state = {
    date: ""
  };
  componentDidMount = () => {
    fetch("/api/date")
      .then(response => response.json())
      .then(data => this.setState({ date: data[0].date }));
  };
  render() {
    return (
      <div className="main-view">
        <p className="main-view__date">
          Data następnej sesji: {this.state.date}
        </p>
      </div>
    );
  }
}

export default Home;
