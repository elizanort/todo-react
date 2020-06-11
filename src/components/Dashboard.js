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
      <div styles={styles.dashboardContainer}>
        <div styles={styles.heroContainer}>
          <h1 styles={styles.heroContainer.timeText}>{this.state.date.toLocaleTimeString()} </h1>
          <h2 styles={styles.heroContainer.greetingText}> Hello, Beautiful</h2>
          <i styles={styles.heroContainer.faSmile}></i>
        </div>
      </div>
    );
  }
}

const styles={
  dashboardContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0b28da',
  },

  heroContainer:{
    padding: '3rem',
    border: '1px solid $fontcolor-header',
    textAlign: 'center',
    
    timeText:{
      padding: '1rem',
      fontSize: '6rem',
    },

    greetingText:{
      padding: '1rem',
    },

    faSmile:{
      color: '#0b28da',
    }
  },

  ctaBtn:{
    padding: '.5rem',
    margin:' 1rem',
    border: '1px solid #0b28da',

}
}

  


export default Dashboard;
