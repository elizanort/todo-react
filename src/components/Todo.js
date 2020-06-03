import React from "react";

function Todo(props) {
  return (
    <li className="todolist_listitems">
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
      <button
        className="delete_button"
        onClick={() => props.deleteItem(props.todoItem.id)}
      >
        X
      </button>
    </li>
  );
}

export default Todo;
