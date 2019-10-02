import React, { Component, Fragment } from "react";
import {
  Modal,
  Button,
  FormControl,
  ControlLabel,
  FormGroup
} from "react-bootstrap";
import { async } from "q";

class ModalEdit extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    bandwidth: 0,
    duration: 0,
    SubCategoryId: this.props.idSub,
    CategoryId: this.props.idCat,
    discount: 0
  };

  componentDidMount = () => {
    // let fill = this.props.data.filter(item => item.id === this.props.idItem);
    const datas = this.props.dataNya[0];
    console.log("HEEREEE", datas);

    this.setState({
      name: datas.name,
      description: datas.description,
      price: datas.price,
      bandwidth: datas.bandwidth,
      duration: datas.duration,
      SubCategoryId: datas.SubCategoryId,
      CategoryId: datas.CategoryId,
      discount: datas.discount
    });
  };
  // handleForm = event => {
  //   let tmpData = { ...this.state.tmpData };
  //   tmpData[event.target.name] = event.target.value;
  //   this.setState({ tmpData });
  // };
  handleForm = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    // console.log("data Asli", this.props.data);
    // console.log("ID nYAA", this.props.idItem);

    // console.log(this.props.idItem);
    // console.log("Hasil Nyaa", fill);

    const datas = this.props.dataNya[0];
    return (
      <Fragment>
        <Modal show={this.props.status} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Name Product</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.state.name}
              name="name"
              onChange={this.handleForm}
            />

            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.state.description}
              name="description"
              onChange={this.handleForm}
            />

            <ControlLabel>Category</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.state.CategoryId}
              disabled="true"
            />

            <ControlLabel>SubCategory</ControlLabel>
            <FormControl
              type="text"
              placeholder={this.state.SubCategoryId}
              disabled="true"
            />
            <div style={{ display: "flex" }}>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Bandwidth</ControlLabel>
                <FormControl
                  type="text"
                  placeholder={this.state.bandwidth}
                  name="bandwidth"
                  onChange={this.handleForm}
                />
              </FormGroup>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Duration</ControlLabel>
                <FormControl
                  type="text"
                  placeholder={this.state.duration}
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
                  placeholder={this.state.price}
                  name="price"
                  onChange={this.handleForm}
                />
              </FormGroup>
              <FormGroup style={{ marginRight: "20px", marginTop: "20px" }}>
                <ControlLabel>Discount</ControlLabel>
                <FormControl
                  type="text"
                  placeholder={this.state.discount}
                  name="discount"
                  onChange={this.handleForm}
                />
              </FormGroup>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.patch(datas.id, this.state)}>
              Input
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalEdit;
