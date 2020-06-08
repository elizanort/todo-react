import React from "react";
import { withRouter, Link } from "react-router-dom";

class TodoDetail extends React.Component {
  state = {
    todo: {...this.getTodoFromList()},

    formData: {
      title: "",
      description: "",
      checkbox: "",
      difficulty: "",
    },
  };

  componentDidMount(_, prevState) {
    if (prevState !== this.state) {
      this.setState((state) => ({
        formData: {
          title: state.todo.title,
          description: state.todo.description,
          checkbox: state.todo.checkbox,
          difficulty: state.todo.difficulty,
        
        },
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
        console.log(this.props.todoList)
      this.setState({ product: {...this.getTodoFromList()} });
    }
  }

  getTodoFromList() {
    const itemId = this.props.match.params.itemId;
    return this.props.todoList.find((item) => item.id === itemId) || {};
  }

  handleChange = (event) => {
    let value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    const name = event.target.name;
  
    this.setState(state=>({ formData: {...state.formData, [name]:value }}));
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert(`item has been updated!`);
  };

  render() {
    return (
      <div>
        <Link to="/todolist">Back</Link>

        <h1 className="form_header">Item Detail</h1>

        <form className="form_container" onSubmit={this.submitHandler}>
          <div className="form_item1 text">
            <label>
              Title
              <input
                type="text"
                name="title"
                value={this.state.formData.title}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div className="form_item2 text">
            <label>
              Description
              <textarea
                rows="10"
                cols="20"
                name="description"
                value={this.state.formData.description}
                onChange={this.handleChange}
              ></textarea>
            </label>
          </div>
          <div className="form_item3 text">
            <label>
              Completed
              <input
                type="checkbox"
                name="checkbox"
                value={this.state.formData.checkbox}
              ></input>
            </label>
          </div>
          <div className="form_item4 text">
            <label>
              Task Difficulty
              <select name="difficulty">
                <option value="placeholder"></option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>
          <div>
            <button type="submit">Update Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(TodoDetail);
