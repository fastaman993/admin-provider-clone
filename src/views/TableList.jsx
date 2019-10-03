/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading/loading";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { getUser } from "../publics/redux/action/user";
import { connect } from "react-redux";

class TableList extends Component {
  state = {
    users: [],
    loading: true,
    reject: false
  };
  componentDidMount = async () => {
    await this.props.dispatch(getUser());
    this.setState({
      users: this.props.users,
      loading: this.props.loading,
      reject: this.props.reject
    });
  };
  render() {
    return (
      <div className="content">
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loading />
          </div>
        ) : this.state.users.users.length > 0 ? (
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
                        {this.state.users.users.map((user, index) => {
                          if (user.role !== "admin") {
                            return (
                              <>
                                <tr>
                                  <td key={index}>{user.name}</td>
                                  <td key={index}>{user.email}</td>
                                  <td key={index}>{user.credit}</td>
                                  <td key={index}>{user.phone}</td>
                                  <td key={index}>
                                    <Button
                                      bsStyle="danger"
                                      onClick={this.handleShow}
                                    >
                                      PANIC BUTTON
                                    </Button>
                                  </td>
                                </tr>
                              </>
                            );
                          }
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
    users: state.Users,
    loading: state.Users.isLoading,
    reject: state.Users.isRejected
  };
};
export default connect(mapStateToProps)(TableList);
