import React from "react";

function Todo(props) {



    return (
        <li className="todolist_listitems" style= {props.todoItem.completed ? {textDecoration: 'line-through'} : null}>
        <input
            type="checkbox"
            onChange={ () => props.onChangeCheckbox(props.todoItem.id)
            }
        ></input>
        <p>{props.todoItem.title}</p>
        <button className="delete_button" onClick={ () =>
        props.deleteItem(props.todoItem.id)
        }>X</button>
        </li>
  );
}

export default Todo;
