import React, { Component } from "react";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading/loading";
import Card from "components/Card/Card.jsx";
import { getTransaction } from "../publics/redux/action/Transaction";
import { connect } from "react-redux";

class TableList extends Component {
  state = {
    transaction: [],
    loading: true,
    reject: false
  };
  componentDidMount = async () => {
    await this.props.dispatch(getTransaction());
    this.setState({
      transaction: this.props.transaction.rows,
      loading: this.props.loading,
      reject: this.props.reject
    });
  };

  convertTimeStamp = timeStamp => {
    timeStamp.toString();
    return timeStamp.slice(0, 10);
  };
  render() {
    console.log(this.state.transaction);

    return (
      <div className="content">
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loading />
          </div>
        ) : this.state.transaction ? (
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  title="All Transaction"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Number Phone</th>
                          <th>Product</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.transaction.map((trans, index) => {
                          return (
                            <>
                              <tr>
                                <td key={index}>{trans.User.name}</td>
                                <td key={index}>{trans.User.phone}</td>
                                <td key={index}>{trans.Product.name}</td>
                                <td key={index}>
                                  {this.convertTimeStamp(trans.createdAt)}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </Table>
                  }
                />
              </Col>
            </Row>
          </Grid>
        ) : (
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  title="All User"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <Table striped hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Credit</th>
                          <th>Number Phone</th>
                          <th>Add On</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="5" style={{ textAlign: "center" }}>
                            Data Not Found
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  }
                />
              </Col>
            </Row>
          </Grid>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    transaction: state.Transaction.transaction,
    loading: state.Transaction.isLoading,
    reject: state.Transaction.isRejected
  };
};
export default connect(mapStateToProps)(TableList);
