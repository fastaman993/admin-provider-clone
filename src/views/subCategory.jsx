import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProduct } from "../publics/redux/action/Category";
import { connect } from "react-redux";
import Item from "../components/subCategory/subCategory";
import Loadings from "../components/Loading/loading";

class Category extends Component {
  state = {
    products: [],
    loading: true
  };

  componentDidMount = async () => {
    const param = this.props.match.params.id;
    await this.props.dispatch(getProduct(param));
    this.setState({
      products: this.props.products.rows,
      loading: this.props.loading
    });
  };
  render() {
    console.log(this.state.loading);

    return (
      <Fragment>
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loadings />
          </div>
        ) : (
          <>
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
                      />
                    </Col>
                  );
                })}
              </Row>
            </Grid>
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
