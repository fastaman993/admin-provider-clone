import React, { Component, Fragment } from "react";
import { Modal, Button, FormControl, ControlLabel } from "react-bootstrap";

class ModalSubEdit extends Component {
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

  render() {
    console.log(this.props.idNya);

    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Sub Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Name Sub Category</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.props.befores}
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

export default ModalSubEdit;
