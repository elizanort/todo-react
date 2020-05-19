import React from 'react';

function Todo(props) {
    return(
        <li className="todolist_listitems">
            <input type="checkbox"></input> 
            <p>{props.todoItem.title}</p>
        </li>
    );
}

export default Todo;