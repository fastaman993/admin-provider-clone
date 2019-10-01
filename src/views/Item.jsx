import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProduct } from "../publics/redux/action/Category";
import { connect } from "react-redux";
import Item from "../components/subCategory/subCategory";
import Modal from "../components/Modal/modalProduct";
import ModalEdits from "../components/Modal/modelEdit";

import Loadings from "../components/Loading/loading";

class Category extends Component {
  // state = {
  //   modalProdact: false,
  //   products: [],
  //   loading: true
  // };
  constructor(props) {
    super(props);
    this.state = {
      modalProdact: false,
      modalEdit: false,
      products: [],
      loading: true
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowE = this.handleShowE.bind(this);
    this.handleCloseE = this.handleCloseE.bind(this);
  }

  handleShow() {
    this.setState({ modalProdact: true });
  }
  handleClose() {
    this.setState({ modalProdact: false });
  }
  handleShowE() {
    this.setState({ modalEdit: true });
  }
  handleCloseE() {
    this.setState({ modalEdit: false });
  }

  componentDidMount = async () => {
    const param = this.props.match.params.id;
    await this.props.dispatch(getProduct(param));
    this.setState({
      products: this.props.products.rows,
      loading: this.props.loading
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loadings />
          </div>
        ) : (
          <>
            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              <Button bsStyle="primary" onClick={this.handleShow}>
                Add Prodact
              </Button>
            </div>
            <Grid fluid>
              <Row style={{ marginTop: "50px", marginLeft: "10px" }}>
                {this.state.products.map((product, index) => {
                  return (
                    <Col lg={12} sm={4}>
                      <Item
                        key={index}
                        name={product.name}
                        detail={product.description}
                        price={product.price}
                        discprice={product.discprice}
                        discount={product.discount}
                        bandwidth={product.bandwidth}
                        duration={product.duration}
                        opens={this.handleShowE}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Grid>
            <Modal status={this.state.modalProdact} close={this.handleClose} />
            <ModalEdits
              status={this.state.modalEdit}
              close={this.handleCloseE}
            />
          </>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.Category.product.response,
    loading: state.Category.isLoading
  };
};

export default connect(mapStateToProps)(Category);
