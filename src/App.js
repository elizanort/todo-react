import React from 'react';
import './App.css';



function App() {
  return (
    render() {
        <body className="page_container">
          <div className="sidebar_container">
            <div className="logo">
              <h1>CHECKCHECK</h1>
            </div>
            <div className="solidline"></div>
            <div className="solidline"></div>
            <div className="solidline"></div>
    
            <div className="todo">
              <a href="www.google.com" className="todo_buttons todo">
                To Do
              </a>
              <a href="www.google.com" className="todo_buttons grocery">
                Grocery List
              </a>
              <a href="www.google.com" className="todo_buttons application">
                Application
              </a>
              <a href="www.google.com" className="todo_buttons newlist">
                New List
                <i className="fas fa-plus"></i>
              </a>
            </div>
    
            <div className="username">{userInfo}</div>
          </div>
    
          <div className="main_container">
            <div className="header">
              <h1 className="header_h1">ToDo List</h1>
            </div>
    
            <div className="todolist">
              <input
                type="text"
                className="todolist_input"
                placeholder="Add new item"
              ></input>
              <button type="submit" className="todolist_submitbutton">
                Add
              </button>
              <div>
                <ul>
                  <li className="todolist_listitems">
                    <Todos todos={this.state.todos}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </body>
  );
}

export default App;
