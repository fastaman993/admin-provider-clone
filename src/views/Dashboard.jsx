import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { getTransaction } from "../publics/redux/action/Transaction";

import { getUser } from "../publics/redux/action/user";
import { connect } from "react-redux";
import Loadings from "../components/Loading/loading";

class Dashboard extends Component {
  state = {
    transaction: [],
    users: [],
    loading: true,
    reject: false
  };
  componentDidMount = async () => {
    await this.props.dispatch(getUser());
    await this.props.dispatch(getTransaction());
    this.setState({
      transaction: this.props.transaction.rows,
      users: this.props.users,
      loading: this.props.loading,
      reject: this.props.reject
    });
  };
  convertTimeStamp = timeStamp => {
    timeStamp.toString();
    return timeStamp.slice(0, 10);
  };
  render() {
    // let fill = this.state.users.users.filter(data => data.role !== "admin");
    // console.log(fill);

    return (
      <div className="content">
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loadings />
          </div>
        ) : (
          <Grid fluid>
            <Row>
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-users text-light" />}
                  statsText="Users"
                  statsValue={(this.state.users.users.length -= 1)}
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-wallet text-success" />}
                  statsText="Total Transaction"
                  statsValue={this.state.transaction.length}
                  statsIcon={<i className="fa fa-calendar-o" />}
                  statsIconText="Last day"
                />
              </Col>
            </Row>
            <Row>
              <Col md>
                {this.state.transaction.length > 0 ? (
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
                                        <td key={index}>
                                          {trans.Product.name}
                                        </td>
                                        <td key={index}>
                                          {this.convertTimeStamp(
                                            trans.createdAt
                                          )}
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
                                <tr>
                                  <td
                                    colSpan={5}
                                    style={{ textAlign: "center" }}
                                  >
                                    Data Belum Ada
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
    users: state.Users,
    loading: state.Users.isLoading,
    reject: state.Users.isRejected
  };
};

export default connect(mapStateToProps)(Dashboard);
