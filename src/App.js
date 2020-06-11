import React from "react";
// import "./App.scss";
// import profileimg from "./imgs/profile.svg";
import TodoList from "./components/TodoList";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Account from "./components/Account"
import { Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    userInformation: [
      {
        firstName: "Elizabeth",
        lastName: "Nortman",
        // picture: profileimg,
      },
    ],
  }

  render() {
    return (
        <div style={styles.pageContainer}>
        <Sidebar userInformation={this.state.userInformation} />
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
          
        </Switch>
      </div>
    );
  }
  
}

const styles = {
  pageContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
  } 
}

export default withRouter(App);
