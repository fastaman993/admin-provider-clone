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
import { Grid, Row, Col, Alert } from "react-bootstrap";
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
      <div>
        {this.state.loading ? (
          <div style={{ marginTop: "50%" }}>
            <Loading />
          </div>
        ) : (
          <Grid fluid>
            <h4 className="title">User Report</h4>

            <div className="content">
              <Row>
                {this.state.report.map((data, idex) => {
                  return (
                    <Col md={4}>
                      <UserCard
                        dataUser={data.User}
                        report={data.complain}
                        date={data.createdAt}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
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
