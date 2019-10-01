import React, { Component, Fragment } from "react";
import {
  Modal,
  Button,
  FormControl,
  ControlLabel,
  FormGroup
} from "react-bootstrap";

class ModalEdit extends Component {
  render() {
    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Name Product</ControlLabel>
            <FormControl type="text" placeholder="type in here boss" />

            <ControlLabel>Description</ControlLabel>
            <FormControl type="text" placeholder="type in here boss" />

            <ControlLabel>Category</ControlLabel>
            <FormControl
              type="text"
              placeholder="type in here boss"
              disabled="true"
            />

            <ControlLabel>SubCategory</ControlLabel>
            <FormControl
              type="text"
              placeholder="type in here boss"
              disabled="true"
            />
            <div style={{ display: "flex" }}>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Bandwidth</ControlLabel>
                <FormControl type="text" placeholder="Bandwith" />
              </FormGroup>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Duration</ControlLabel>
                <FormControl type="text" placeholder="Per Days" />
              </FormGroup>
            </div>
            <div style={{ display: "flex" }}>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Price</ControlLabel>
                <FormControl type="text" placeholder="Rp 000000" />
              </FormGroup>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Discount</ControlLabel>
                <FormControl type="text" placeholder="Discount %" />
              </FormGroup>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Input</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalEdit;
