import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import {
  getProduct,
  postProduct,
  editProduct,
  deleteProduct
} from "../publics/redux/action/Product";
import Card from "components/Card/Card.jsx";

import { getSubCategoryId } from "../publics/redux/action/subCategory";
import { connect } from "react-redux";
import Item from "../components/subCategory/subCategory";
import Modal from "../components/Modal/modalProduct";
import ModalEdits from "../components/Modal/modelEdit";
import Swal from "sweetalert2";
import Loadings from "../components/Loading/loading";

class Category extends Component {
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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.props.dispatch(deleteProduct(id));
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          () => {
            window.location.reload();
          }
        );
      }
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
                {this.state.products.length > 0 ? (
                  this.state.products.map((product, index) => {
                    return (
                      <>
                        <Col lg={12}>
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
                  })
                ) : (
                  <Grid fluid style={{ marginTop: "5px" }}>
                    <Row>
                      <Col md={12}>
                        <Card
                          title="Data Tidak Ada"
                          ctTableFullWidth
                          ctTableResponsive
                        />
                      </Col>
                    </Row>
                  </Grid>
                )}
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
