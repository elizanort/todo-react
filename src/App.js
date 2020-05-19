import React from "react";
import "./App.scss";
import Todo from "./components/Todo";
// import profileimg from "./imgs/profile.svg";
import Sidebar from './components/Sidebar';

const userInformation = [
  {
    name: "Elizabeth Nortman",
    // picture: { profileimg },

  }
];

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

const todos = [
  {
    id: 1,
    listName: "Todo List",
    title: "Workout",
    completed: false,
  },
  {
    id: 2,
    listName: "Todo list",
    title: "Complete ",
    completed: false,
  },
  {
    id: 3,
    listName: "Grocery List",
    title: "Grapes",
    completed: false,
  },
  {
    id: 4,
    listName: "Grocery List",
    title: "Bread",
    completed: false,
  },
  {
    id: 5,
    listName: "Todo list",
    title: "Write a thank you letter to dad",
    completed: false,
  },

  {
    id: 6,
    listName: "Application List",
    title: "UXR Google",
    completed: false,
  },
];

// const todoItem = todos.map(function (todoItem){
//   return (
//     <li className="todolist_listitems">
//       <input type="checkbox"></input>
//       <p>{todoItem.title}</p>
//     </li>
//   );
// })

function App() {
  return (
    <body className="page_container">
    <Sidebar />

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
              {todos.map((todoItem, index) => (
                <Todo todoItem={todoItem} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
