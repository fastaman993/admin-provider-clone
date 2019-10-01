import React, { Component, Fragment } from "react";
import {
  Modal,
  Button,
  FormControl,
  ControlLabel,
  FormGroup
} from "react-bootstrap";

class ModalItem extends Component {
  render() {
    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Category</ControlLabel>
            <FormControl
              type="text"
              placeholder="type in here boss"
              disabled="true"
            />
            <ControlLabel>Name Product</ControlLabel>
            <FormControl type="text" placeholder="type in here boss" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Input</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalItem;
