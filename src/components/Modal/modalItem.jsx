import React, { Component, Fragment } from "react";
import { Modal, Button, FormControl, ControlLabel } from "react-bootstrap";

class ModalItem extends Component {
  state = {
    tmpData: { CategoryId: "", name: "" }
  };
  handleForm = event => {
    let tmpData = { ...this.state.tmpData };
    tmpData[event.target.name] = event.target.value;
    this.setState({ tmpData });
  };
  render() {
    console.log(this.state.tmpData);
    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Pilih Category</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              name="CategoryId"
              onChange={this.handleForm}
            >
              {this.props.data.map((dat, index) => (
                <option key={index} value={dat.id}>
                  {dat.name}
                </option>
              ))}
              {/* <option value="other">...</option> */}
            </FormControl>

            <ControlLabel>Name Product</ControlLabel>
            <FormControl
              type="text"
              name="name"
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

export default ModalItem;
