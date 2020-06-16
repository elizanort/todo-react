import React from "react";
import "../App.scss";
import { Link, withRouter } from "react-router-dom";

const validUserInfo = {
  email: "test@kenzieacademy",
  password: "test123",
};
class Login extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",

    error: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.email === validUserInfo.email &&
      this.state.password === validUserInfo.password
    ) {
      this.props.history.push("/dashboard");
    } else {
      this.setState({ error: "Invalid username or password" });
    }
  };

  render() {
    return (
      <div className="login_container">
        <div className="form-wrapper">
          <h2 className="login_h2">Login</h2>
          <form onSubmit={this.handleSubmit} noValidate>
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
                noValidate
              />
            </div>
            <div className="error">
              {this.state.error && <p>{this.state.error}</p>}
            </div>
            <div className="button_wrapper">
                <div className="login-btn">
                <Link to="/register">Register</Link>
              </div>
              <div className="submit">
                <button className="login-btn">Login</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
