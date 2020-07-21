import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Registration extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    message: "",

    errors: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    isValid: false,
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let error = "";
    switch (name) {
      case "email":
        if (value.length > 30) {
          error = "Max 30 characters";
        } else if (validEmailRegex.test(value)) {
          error = "Please enter a valid email";
        }
        break;
      case "password":
        if (value.length < 8 || value.length > 16) {
          error = "Password must be greater than 8 characters and less than 16";
        }
        break;
      case "passwordConfirmation":
        if (value !== this.state.password) {
          error = "Passwords do not match";
        }
    }

    this.setState((state) => {
      return {
        [name]: value,
        errors: { ...state.error, [name]: error },
      };
    }, this.validateForm);
  };

  validateForm = () => {
    let hasErrors = false;
    for (let property in this.state.errors) {
      if (this.state.errors[property]) {
        hasErrors = true;
      }
    }
    let isValid =
      this.state.email &&
      this.state.password &&
      this.state.passwordConfirmation &&
      !hasErrors;
    this.setState({ isValid: Boolean(isValid) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValid) {
      this.props.history.push("/dashboard");
    } else {
      this.setState({ message: "please complete all forms" });
    }
  };

  render() {
    return (
      <div className="registration_container">
        <div className="form-wrapper">
          <h2>Register</h2>
          {this.state.message && <p className="error">{this.state.message}</p>}
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                value={this.state.fullName}
                noValidate
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                noValidate
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                noValidate
              />
            </div>
            <div className="password">
              <label htmlFor="password">Repeat Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                noValidate
              />
            </div>
            <div className="error">
              {this.state.errors.email && <p>{this.state.errors.email}</p>}
            </div>
            <div className="error">
              {this.state.errors.password && (
                <p>{this.state.errors.password}</p>
              )}
            </div>
            <div className="error">
              {this.state.errors.passwordConfirmation && (
                <p>{this.state.errors.passwordConfirmation}</p>
              )}
            </div>

            <div className="register-btn">
              <Link to="/login">Sign In</Link>
            </div>
            <div className="submit">
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
