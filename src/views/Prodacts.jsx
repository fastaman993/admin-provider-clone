import React, { Component, Fragment } from "react";
import Category from "../components/Category/Category";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton";
import ModalCategory from "../components/Modal/modalCategory";
import ModalItem from "../components/Modal/modalItem";
import { postCategory, deleteCategory } from "../publics/redux/action/Category";
import { postSubCategory } from "../publics/redux/action/subCategory";
import { connect } from "react-redux";

class Prodacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCategory: false,
      modalItem: false,
      modalSubCat: false
    };
    this.handleShowC = this.handleShowC.bind(this);
    this.handleCloseC = this.handleCloseC.bind(this);
    this.handleShowI = this.handleShowI.bind(this);
    this.handleCloseI = this.handleCloseI.bind(this);
  }

  handleCloseC() {
    this.setState({ modalCategory: false });
  }
  handleCloseI() {
    this.setState({ modalItem: false });
  }

  handleShowC() {
    this.setState({ modalCategory: true });
  }
  handleShowI() {
    this.setState({ modalItem: true });
  }

  handleSubmit = param => {
    this.props.dispatch(postCategory(param));
    this.setState({ modalCategory: false });
  };

  handleSubmititem = param => {
    this.props
      .dispatch(postSubCategory(param))
      .then(() => {
        this.setState({ modalItem: false });
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  delete = param => {
    this.props
      .dispatch(deleteCategory(param))
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Fragment>
        <div style={{ margin: "10px" }}>
          <Button bsStyle="primary" onClick={this.handleShowC}>
            Add Product
          </Button>
          <Button
            bsStyle="success"
            onClick={this.handleShowI}
            style={{ marginLeft: "10px" }}
          >
            Add Item
          </Button>
        </div>
        {/* <h1>Hello Wold</h1> */}
        <Grid fluid>
          <Row
            style={{
              marginTop: "10px",
              marginLeft: "22%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.props.category.map((cat, index) => {
              return (
                <>
                  <Col lg={8} sm={3}>
                    <Category
                      name={cat.name}
                      id={cat.id}
                      subCategories={cat.SubCategories}
                      deleteCategory={this.delete}
                    />
                  </Col>
                </>
              );
            })}
          </Row>
        </Grid>
        <ModalCategory
          status={this.state.modalCategory}
          show={this.handleShowC}
          close={this.handleCloseC}
          forms={this.handleForm}
          post={this.handleSubmit}
        />

        <ModalItem
          status={this.state.modalItem}
          show={this.handleShowI}
          close={this.handleCloseI}
          data={this.props.categorys.rows}
          post={this.handleSubmititem}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    categorys: state.Category.category.response
  };
};

export default connect(mapStateToProps)(Prodacts);
