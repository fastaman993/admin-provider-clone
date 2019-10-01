import React, { Component, Fragment } from "react";
import Category from "../components/Category/Category";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton";
import ModalCategory from "../components/Modal/modalCategory";
import ModalItem from "../components/Modal/modalItem";
import { postCategory } from "../publics/redux/action/Category";
import { connect } from "react-redux";

class Prodacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCategory: false,
      modalItem: false,
      data: []
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
    console.log(param);
    console.log("asasd");
  };
  render() {
    return (
      <Fragment>
        <div style={{ margin: "10px" }}>
          <Button bsStyle="primary" onClick={this.handleShowC}>
            Add Product
          </Button>
        </div>
        {/* <h1>Hello Wold</h1> */}
        <Grid fluid>
          <Row style={{ marginTop: "50px" }}>
            {this.props.category.map((cat, index) => {
              return (
                <Col lg={5} sm={3}>
                  <Category name={cat.name} subCategories={cat.SubCategories} />
                </Col>
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
