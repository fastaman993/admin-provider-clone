import React, { Component, Fragment } from "react";
import {
  FormGroup,
  Col,
  Form,
  FormControl,
  ControlLabel,
  Checkbox,
  Button
} from "react-bootstrap";
import "../assets/css/login.css";
import { loginAdmin } from "../publics/redux/action/auth";
import { connect } from "react-redux";
import { stat } from "fs";
import localStorage from "local-storage";
import Loading from "../components/Loading/loading_login";

class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    error: false,
    loading: false
  };

  componentDidMount = async () => {
    const token = localStorage.get("token");
    console.log(token);

    if (token) {
      window.location = "/admin/dashboard";
    }
  };

  handleForm = event => {
    let user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  submit = async () => {
    this.setState({ loading: true });
    await this.props
      .dispatch(loginAdmin(this.state.user))
      .then(() => {
        this.setState({ loading: false });
        localStorage.set("token", this.props.login.token);
        window.location = "/";
      })
      .catch(() => this.setState({ error: true, loading: false }));
  };
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <div className="master">
          <div className="box-core">
            <div style={{ textAlign: "center" }}>
              <h3>Login</h3>
            </div>

            {this.state.loading ? (
              <Loading />
            ) : this.state.error ? (
              <div style={{ textAlign: "center" }}>
                <p>Email Atau Password Salah</p>
              </div>
            ) : null}
            <div className="email-input">
              <FormGroup controlId="formInlineName">
                <ControlLabel>Email</ControlLabel>{" "}
                <FormControl
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={this.handleForm}
                />
              </FormGroup>
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  onChange={this.handleForm}
                />
              </FormGroup>
              {/* <Button type="submit">Login</Button> */}
              <button className="btn-login" onClick={this.submit}>
                <span className="loginz"></span>
                <span className="loginz"></span>
                <span className="loginz"></span>
                <span className="loginz"></span>
                Login
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    login: state.Login.login,
    reject: state.Login.isRejected
  };
};

export default connect(mapStateToProps)(Login);
