import React, { Component, Fragment } from "react";
import { Modal, Button, FormControl, ControlLabel } from "react-bootstrap";

class ModalCategory extends Component {
  state = {
    tmpData: ""
  };
  handleForm = event => {
    this.setState({ tmpData: ([event.target.name] = event.target.value) });
  };
  // handleSubmit = () => {
  //   this.props.dispatch(postCategory(this.state.tmpData));
  //   this.setState;
  // };
  submit = () => {
    this.props.post();
  };
  render() {
    console.log(this.state.tmpData);

    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Name Category</ControlLabel>
            <FormControl
              type="text"
              placeholder="type in here boss"
              onChange={this.handleForm}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.post(this.state.tmpData)}>
              Input
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalCategory;
