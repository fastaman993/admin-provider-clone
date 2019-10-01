import React, { Component, Fragment } from "react";
import Category from "../components/Category/Category";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton";

class Prodacts extends Component {
  render() {
    const loading = () => (
      <div className="animated fadeIn pt-3 text-center">Loading...</div>
    );

    return (
      <Fragment>
        <div style={{ margin: "10px" }}>
          <Button bsStyle="primary">Add Product</Button>
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
      </Fragment>
    );
  }
}

export default Prodacts;
