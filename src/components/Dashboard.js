import React, { Component } from "react";
import "../App.scss";

class Dashboard extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="dashboard_container">
        <div className="hero_container">
          <h1 className="time_text">{this.state.date.toLocaleTimeString()} </h1>
          <h2 className="greeting_text"> Hello, Beautiful</h2>
          <i className="far fa-smile"></i>
        </div>
      </div>
    );
  }
}

export default Dashboard;
