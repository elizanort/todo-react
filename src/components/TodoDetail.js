import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from 'styled-components';

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
      <DetailsWrapper>
        <BackBtn to="/todolist">
          Back
        </BackBtn>

        
        <Form onSubmit={this.handleSubmit}>
          <FormWrapper>
            <FormHeader>Item Detail</FormHeader>
            <InputWrapper>
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={this.state.formData.title}
                  onChange={this.handleChange}
                ></input>
              </label>
            </InputWrapper>
            <InputWrapper>
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
            </InputWrapper>
            <InputWrapper>
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
            </InputWrapper>
            <InputWrapper>
              <label>
                Task Difficulty
                <select name="difficulty" onChange={this.handleChange}>
                  <option value="default">Choose Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
            </InputWrapper>
            <div>
              <button type="submit">Update Changes</button>
            </div>
          </FormWrapper>
        </Form>
    </DetailsWrapper>
    );
  }
}

const DetailsWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const BackBtn = styled(Link)`
padding: 1rem;
`;

const Form = styled.form`
display: flex;
justify-content: center;
`;

const FormWrapper=styled.div`
display: flex,
flex-direction: column,
padding: 1rem,
border: 1px solid #0b28da,
`;

const FormHeader=styled.h1`
text-align: center,
padding: 1rem,
`;

const InputWrapper = styled.div`
padding: .5rem,
`; 

 
    


export default withRouter(TodoDetail);
