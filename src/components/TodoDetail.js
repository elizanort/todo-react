import React from "react";
import { withRouter, Link } from "react-router-dom";

class TodoDetail extends React.Component {
  state = {
    formData: { ...this.getTodoFromList() },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        formData: { ...this.getTodoFromList() },
      });
    }
  }

  getTodoFromList() {
    const itemId = this.props.match.params.itemId;
    return (
      this.props.todoList.find((item) => item.id === itemId) || {
        title: "",
        description: "",
        difficulty: "",
        completed: false,
      }
    );
  }

  handleChange = (event) => {
    let value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    const name = event.target.name;

    this.setState((state) => ({
      formData: { ...state.formData, [name]: value },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`item has been updated!`);
    this.props.onUpdateItem(this.state.formData);
  };

  render() {
    return (
      <div className="details_pagewrapper">
        <Link to="/todolist" className="back-btn">
          Back
        </Link>

        

        <form className="form_container" onSubmit={this.handleSubmit}>
          <div className="form_wrapper">
            <h1 className="form_header">Item Detail</h1>
            <div className="form_item1 input">
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
            <div className="form_item2 input">
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
            <div className="form_item3 input">
              <label>
                Completed
                <input
                  type="checkbox"
                  name="completed"
                  onChange={this.handleChange}
                  defaultChecked={this.state.formData.completed}
                  value={this.state.formData.checkbox}
                ></input>
              </label>
            </div>
            <div className="form_item4 input">
              <label>
                Task Difficulty
                <select name="difficulty" onChange={this.handleChange}>
                  <option value="default">Choose Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </div>
            <div>
              <button type="submit">Update Changes</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(TodoDetail);
