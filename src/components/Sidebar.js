import React from 'react';
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar_container">
      <div className="logo">
        <h1>CHECKCHECK</h1>
      </div>
      <div className="solidline"></div>
      <div className="solidline"></div>
      <div className="solidline"></div>

      <div className="todo">
        <Link to="/">
          <div className="todo_buttons dashboard">Dashboard</div>
        </Link>
        <Link to="/todolist">
          <div className="todo_buttons todo">ToDo List</div>
        </Link>
        <Link to="/account">
          <div className="todo_buttons account">Account</div>
        </Link>
      </div>

      {/* <div className="username">
        <img
          src={props.userInformation.picture}
          className="profile_img"
          alt="profile"
        />

        <a href="www.google.com" className="username_link">
          {props.userInformation.firstName}
        </a>
      </div> */}
    </div>
  );
}

export default Sidebar;
