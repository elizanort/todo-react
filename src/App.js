import React from "react";
import "./App.scss";
import Todo from "./components/Todo";
import profileimg from "./imgs/profile.svg";
import Sidebar from './components/Sidebar';



// const userInfo = userInformation.map(function (userInformation) {
//   return (
//     <>
//       <img
//         src={userInformation.picture}
//         className="profile_img"
//         alt="profile"
//       ></img>

//       <a href="www.google.com" className="username_link">
//         {userInformation.name}
//       </a>
//     </>
//   );
// });

class App extends React.Component{
  state = {
    todoList: [
      {
        id: 1,
        listName: "Todo List",
        title: "Workout",
        isChecked: false,
      },
      {
        id: 2,
        listName: "Todo list",
        title: "Complete ",
        isChecked: false,
      },
      {
        id: 3,
        listName: "Grocery List",
        title: "Grapes",
        isChecked: false,
      },
      {
        id: 4,
        listName: "Grocery List",
        title: "Bread",
        isChecked: false,
      },
      {
        id: 5,
        listName: "Todo list",
        title: "Write a thank you letter to dad",
        isChecked: false,
      },
    
      {
        id: 6,
        listName: "Application List",
        title: "UXR Google",
        completed: false,
      },
    ],

    newTodoItem: "",

    userInformation: [
      {
        name: "Elizabeth Nortman",
        picture: profileimg,
      },
    ],
  };

    // onChangeCheckbox = (event) => {
    //   this.setState({ isChecked: event.target.checked });
    // }

    handleInputChange = (event) => {
      this.setState({newTodoItem: event.target.value});
    }

    handleNewTodoItem = () => {
      let newTodoObj = {
          id: "",
          listName: "",
          title: this.state.newTodoItem,
          completed: false,
      };

      this.setState({
        todoList: [...this.state.todoList, newTodoObj],
        newTodoItem: "",
      });
    };


  render (){
    return(
      <div className="page_container">
      <Sidebar userInformation={this.state.userInformation}/>

        <div className="main_container">
          <div className="header">
            <h1 className="header_h1">ToDo List</h1>
          </div>

          <div className="todolist">
            <input
              type="text"
              value={this.state.newTodoItem}
              onChange={this.handleInputChange}
              className="todolist_input"
              placeholder="Add new item"
            ></input>
            <button type="submit" className="todolist_submitbutton" onClick={this.handleNewTodoItem}>
              Add
            </button>
            <div>
              <ul>
                {this.state.todoList.map((todoItem, index) => (
                  <Todo todoItem={todoItem} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
