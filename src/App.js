import React from "react";
import "./App.scss";
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
        <div className="page_container">
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

export default withRouter(App);
