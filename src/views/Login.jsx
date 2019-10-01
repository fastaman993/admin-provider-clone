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

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="master">
          <div className="box-core">
            <h3 className="title">Login</h3>
            <div className="email-input">
              <FormGroup controlId="formInlineName">
                <ControlLabel>Email</ControlLabel>{" "}
                <FormControl type="email" placeholder="Your Email" />
              </FormGroup>
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" placeholder="Your Password" />
              </FormGroup>
              {/* <Button type="submit">Login</Button> */}
              <button className="btn-login">
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

export default Login;
