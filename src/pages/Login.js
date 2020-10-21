import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
class Login extends Component {
  state = {
    login: "",
    password: "",
    fetchedPassword: "",
    acces: false
  };

  componentDidMount = () => {
    fetch("/api/date")
      .then(response => response.json())
      .then(data => this.setState({ fetchedPassword: data[1].password }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.login === "Belithe" &&
      this.state.password === this.state.fetchedPassword
    )
      this.setState({
        acces: true
      });
    else window.location.reload();
  };

  render() {
    return (
      <>
        <Route
          render={() =>
            this.state.acces ? (
              <Redirect to="/admin" />
            ) : (
              <div className="main-view">
                <form onSubmit={this.handleSubmit}>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="login"
                    placeholder="Login"
                  />
                  <br />
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    placeholder="Hasło"
                  />
                  <br />
                  <button className="btn-admin">Zaloguj</button>
                </form>
              </div>
            )
          }
        />
      </>
    );
  }
}

export default Login;
