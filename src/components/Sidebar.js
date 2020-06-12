import React from 'react';
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar_container">
      <div styles={styles.logo} className="logo">
        <h1>CHECKCHECK</h1>
      </div>
      <div styles={styles.solidline}className="solidline"></div>
      <div styles={styles.solidline}className="solidline"></div>
      <div styles={styles.solidline}className="solidline"></div>

      <div className="todo">
        <Link to="/">
          <div styles={styles.todoButtons}className="todo_buttons dashboard">Dashboard</div>
        </Link>
        <Link to="/todolist">
          <div styles={styles.todoButtons}className="todo_buttons todo">ToDo List</div>
        </Link>
        <Link to="/account">
          <div styles={styles.todoButtons}className="todo_buttons account">Account</div>
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

const styles = {
  logo:{
    padding: '2rem',
    fontFamily: 'Americana',
  },

  solidline:{
    height: '.25rem',
    backgroundColor: '#0b28da',
    margin: '.25rem',
  },

  todo:{
    display: 'flex',
    flexDirection: 'column',
  },

  todoButtons:{
    padding: '1rem',
    textAlign: 'center',
    border: '1px solid $#0b28da',
    color: '#393939',
  },

 
}

export default Sidebar;
