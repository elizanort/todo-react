import React from "react";
import { withRouter } from "react-router-dom";
// import {Switch, Route} from 'react-router-dom';

function Todo(props) {
  return (
    <li className="todolist_listitems" style={styles.todoListListItems}>
      <div className="left_container" styles={styles.leftContainer}>
      <input
        type="checkbox"
        onChange={() => props.onChangeCheckbox(props.todoItem.id)}
        defaultChecked={props.todoItem.completed}
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
          styles={styles.rightContainerBtn}
          className="delete_button"
          onClick={() => props.deleteItem(props.todoItem.id)}
        >
          delete
        </button>
        <button
          styles={styles.rightContainerBtn}
          className="itemDetail_button"
          onClick={() => props.history.push("/todolist/" + props.todoItem.id)}
        >
          view details
        </button>
      </div>
    </li>
  );
}

const styles={
  todoListListItems:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    width: '80%',
    
    p:{
    padding: '0rem 1rem',
    }

  },

  
  leftContainer:{
        display:'flex',
        alignItems: 'center',
    },

  rightContainerBtn:{
    margin: '0rem .5rem',
    borderRadius: '30%',
    border: 'none',
    background: 'none',
            
    }

}
export default withRouter(Todo);
