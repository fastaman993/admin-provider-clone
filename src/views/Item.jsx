import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getProduct,
  postProduct,
  editProduct,
  deleteProduct
} from "../publics/redux/action/Product";
import { getSubCategoryId } from "../publics/redux/action/subCategory";
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
      subCategory: [],
      loading: true,
      dataItem: []
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
  handleShowE(param) {
    let fill = this.state.products.filter(item => item.id === param);

    this.setState({ modalEdit: true, dataItem: fill });
  }
  handleCloseE() {
    this.setState({ modalEdit: false });
  }

  componentDidMount = async () => {
    const param = this.props.match.params.id;
    await this.props.dispatch(getProduct(param));
    await this.props.dispatch(getSubCategoryId(param));
    this.setState({
      products: this.props.products.response.rows,
      loading: this.props.loading,
      subCategory: this.props.subCategory.rows
    });
  };
  handleSubmit = param => {
    this.props
      .dispatch(postProduct(param))
      .then(() => {
        this.setState({ modalProdact: false });
      })
      .catch(err => console.log(err));
  };
  handleDelete = id => {
    this.props.dispatch(deleteProduct(id)).then(() => {
      this.setState({
        products: this.props.products
      });
    });
  };
  handleSubmitEdit = (id, data) => {
    this.props
      .dispatch(editProduct(id, data))
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  render() {
    // const data = this.state.subCategory[0];
    // console.log("INI DATA", data);
    console.log(this.state);

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
              <Row style={{ marginTop: "50px" }}>
                {this.state.products.map((product, index) => {
                  return (
                    <>
                      <Col lg={12} sm={4}>
                        <Item
                          key={index}
                          idNya={product.id}
                          name={product.name}
                          detail={product.description}
                          price={product.price}
                          discprice={product.discprice}
                          discount={product.discount}
                          bandwidth={product.bandwidth}
                          duration={product.duration}
                          opens={this.handleShowE}
                          hapus={this.handleDelete}
                        />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Grid>
            <Modal
              idSub={this.state.subCategory.id}
              idCat={this.state.subCategory.CategoryId}
              status={this.state.modalProdact}
              close={this.handleClose}
              post={this.handleSubmit}
            />
            {this.state.modalEdit ? (
              <ModalEdits
                status={this.state.modalEdit}
                close={this.handleCloseE}
                dataNya={this.state.dataItem}
                patch={this.handleSubmitEdit}
              />
            ) : null}
          </>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.Product.product,
    subCategory: state.subCategory.subCategoryId.response,
    loading: state.Category.isLoading
  };
};

export default connect(mapStateToProps)(Category);
