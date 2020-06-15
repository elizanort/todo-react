import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import shortid from "shortid";
import Todo from "./Todo";
import TodoDetail from "./TodoDetail";
import styled from 'styled-components';

class TodoList extends React.Component {
  state = {
    todoList: [],

    newTodoItem: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todoList !== prevState.todoList) {
      localStorage.setItem(
        "myapp_todolist",
        JSON.stringify(this.state.todoList)
      );
    }
  }

  componentDidMount() {
    let listString = localStorage.getItem("myapp_todolist");
    if (listString) {
      this.setState({
        todoList: JSON.parse(listString),
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({ newTodoItem: event.target.value });
  };

  handleNewTodoItem = () => {
    let newTodoObj = {
      id: shortid.generate(),
      description: "",
      title: this.state.newTodoItem,
      completed: false,
      difficulty: "",
    };

    this.setState({
      todoList: [...this.state.todoList, newTodoObj],
      newTodoItem: "",
    });
  };

  onUpdateItem = (formData) => {
    this.setState((state) => {
      const updatedItem = state.todoList.map((item) => {
        if (item.id === formData.id) {
          return { ...formData };
        } else {
          return item;
        }
      });

      return {
        todoList: updatedItem,
      };
    });
  };

  onChangeCheckbox = (id) => {
    this.setState(() => {
      const newList = this.state.todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: item.completed ? false : true };
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

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ todoList: updatedList });
  };

  render() {
    return (
      <Switch>
        <Route path="/todolist/:itemId">
          <TodoDetail
            todoList={this.state.todoList}
            onUpdateItem={this.onUpdateItem}
          />
        </Route>
        <Route path="/todolist">
          <MainContainer>
            <HeaderWrap>
              <HeaderText>Todo List</HeaderText>
            </HeaderWrap>

            <TodoWrap>
              <ToDoInput
                type="text"
                placeholder="Add new item"
                value={this.state.newTodoItem}
                onChange={this.handleInputChange}
              ></ToDoInput>
              <ToDoBtn
                type="submit"
                className="todolist_submitbutton"
                onClick={this.handleNewTodoItem}
              >
                Add
              </ToDoBtn>
              <div>
                <ul>
                  {this.state.todoList.map((todoItem, index) => (
                    <Todo
                      todoItem={todoItem}
                      onChangeCheckbox={this.onChangeCheckbox}
                      deleteItem={this.deleteItem}
                      key={index}
                    />
                  ))}
                </ul>
              </div>
            </TodoWrap>
          </MainContainer>
        </Route>
      </Switch>
    );
  }
}

const MainContainer = styled.div`
    display: 'flex';
    flex-direction: 'column';
    justify-c
    ontent: 'flex-end';
    background: 'rgb(245, 206, 206)';
    height: '15rem';
  `;

const HeaderWrap = styled.div`
  padding: ".5rem 1rem";
`;

const HeaderText = styled.h1`
  padding: ".5rem 1rem";
`;

const TodoWrap = styled.div`
  padding: '1.5rem 1rem';
  font-size: '1.2rem';
`;

const ToDoInput = styled.input`
  
      height: '2rem';
      width: '60%';
      margin:'8 0rem';
      padding: '.5rem';
  `;

const ToDoBtn = styled.button`
      margin: '1rem',
      height: '2rem',
      padding: '0rem 2rem',
      background: '#FFFFFF',
      color: '#0b28da',
      border: '1px solid #0b28da',
  `;

export default withRouter(TodoList);
