import React, { Component, Fragment } from "react";
import {
  Modal,
  Button,
  FormControl,
  ControlLabel,
  FormGroup
} from "react-bootstrap";

class ModalProduct extends Component {
  state = {
    tmpData: {
      name: "",
      description: "",
      price: 0,
      bandwidth: 0,
      duration: 0,
      SubCategoryId: this.props.idSub,
      CategoryId: this.props.idCat,
      discount: 0
    }
  };
  handleForm = event => {
    let tmpData = { ...this.state.tmpData };
    tmpData[event.target.name] = event.target.value;
    this.setState({ tmpData });
  };
  render() {
    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Name Product</ControlLabel>
            <FormControl
              type="text"
              placeholder="type in here boss"
              name="name"
              onChange={this.handleForm}
            />

            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="type in here boss"
              name="description"
              onChange={this.handleForm}
            />

            <ControlLabel>Category</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.props.idCat}
              disabled="true"
            />

            <ControlLabel>SubCategory</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.props.idSub}
              disabled="true"
            />
            <div style={{ display: "flex" }}>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Bandwidth</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Bandwith"
                  name="bandwidth"
                  onChange={this.handleForm}
                />
              </FormGroup>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Duration</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Per Days"
                  name="duration"
                  onChange={this.handleForm}
                />
              </FormGroup>
            </div>
            <div style={{ display: "flex" }}>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Price</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Rp 000000"
                  name="price"
                  onChange={this.handleForm}
                />
              </FormGroup>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Discount</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Discount %"
                  name="discount"
                  onChange={this.handleForm}
                />
              </FormGroup>
            </div>
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

export default ModalProduct;
