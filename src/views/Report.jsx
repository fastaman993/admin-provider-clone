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
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

import UserCard from "../components/UserCard/UserCard";
import { connect } from "react-redux";
import { getReport } from "../publics/redux/action/report";
import Loading from "../components/Loading/loading";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  state = {
    report: [],
    loading: true
  };
  componentDidMount = async () => {
    await this.props.dispatch(getReport());
    this.setState({
      report: this.props.report.rows,
      loading: this.props.loading
    });
  };
  render() {
    console.log(this.state);

    return (
      <div style={{ marginTop: "20px" }}>
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loading />
          </div>
        ) : this.state.report.length > 0 ? (
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
                          <th>Number Phone</th>
                          <th>Complain</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.report.map((data, index) => (
                          <tr>
                            <td key={index}>{data.User.name}</td>
                            <td key={index}>{data.User.email}</td>
                            <td key={index}>{data.User.phone}</td>
                            <td style={{ wordWrap: "break-word" }} key={index}>
                              {data.complain}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  }
                />
              </Col>
            </Row>
          </Grid>
        ) : (
          <Grid fluid style={{ marginTop: "20px" }}>
            <Row>
              <Col md={12}>
                <Card
                  title="User Transaction"
                  ctTableFullWidth
                  ctTableResponsive
                  content={
                    <p style={{ textAlign: "center" }}>
                      Alhamdulilah Belum ada
                    </p>
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
    report: state.Report.report,
    loading: state.Report.isLoading
  };
};

export default connect(mapStateToProps)(Notifications);
