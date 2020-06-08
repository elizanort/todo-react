import React from "react";
import { withRouter } from "react-router-dom";
// import {Switch, Route} from 'react-router-dom';

function Todo(props) {
  return (
    <li className="todolist_listitems">
      <div className="left_container">
      <input
        type="checkbox"
        onChange={() => props.onChangeCheckbox(props.todoItem.id)}
      ></input>

      <p
        style={
          props.todoItem.completed ? { textDecoration: "line-through" } : null
        }
      >
        {props.todoItem.title}
      </p>
      </div>
      <div className="right_container">
        <button
          className="delete_button"
          onClick={() => props.deleteItem(props.todoItem.id)}
        >
          delete
        </button>
        <button
          className="itemDetail_button"
          onClick={() => props.history.push("/todolist/" + props.todoItem.id)}
        >
          view details
        </button>
      </div>
    </li>
  );
}

export default withRouter(Todo);
