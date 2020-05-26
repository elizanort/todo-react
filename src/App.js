import React from "react";
import shortid from "shortid";
import "./App.scss";
import Todo from "./components/Todo";
import profileimg from "./imgs/profile.svg";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  state = {
    todoList: [],

    newTodoItem: "",

    userInformation: [
      {
        name: "Elizabeth Nortman",
        picture: profileimg,
      },
    ],
  };


  handleInputChange = (event) => {
    this.setState({ newTodoItem: event.target.value });
  };

  handleNewTodoItem = () => {
    let newTodoObj = {
      id: shortid.generate(),
      listName: "",
      title: this.state.newTodoItem,
      completed: false,
    };

    this.setState({
      todoList: [...this.state.todoList, newTodoObj],
      newTodoItem: "",
    });
  };


  onChangeCheckbox = (id) => {
    this.setState((state) => {
      const newList = state.todoList.map((item) => {
        if (item.id === id) {
          return {...item, completed: item.completed ? false : true};
        } else {
          return item;
        }
      });

      return {
        todoList: newList,
      };
    });
  };


  
  deleteItem = (id) => {
    const list = [...this.state.todoList];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({todoList: updatedList})

  }

  


  render() {
    return (
      <div className="page_container">
        <Sidebar userInformation={this.state.userInformation} />

        <div className="main_container">
          <div className="header">
            <h1 className="header_h1">ToDo List</h1>
          </div>

          <div className="todolist">
            <input
              type="text"
              placeholder="Add new item"
              value={this.state.newTodoItem}
              onChange={this.handleInputChange}
              className="todolist_input"
            ></input>
            <button
              type="submit"
              className="todolist_submitbutton"
              onClick={this.handleNewTodoItem}
            >
              Add
            </button>
            <div>
              <ul>
                {this.state.todoList.map((todoItem, index) => (
                  <Todo todoItem={todoItem} onChangeCheckbox={this.onChangeCheckbox} deleteItem={this.deleteItem} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
