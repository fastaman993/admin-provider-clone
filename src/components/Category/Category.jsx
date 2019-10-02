import React, { Component } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteSubCategory } from "../../publics/redux/action/subCategory";
import { connect } from "react-redux";

class Category extends Component {
  delete = paramId => {
    this.props.dispatch(deleteSubCategory(paramId)).then(() => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col md={7}>
              <div className="numbers">
                <p>{this.props.name}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "10px" }}>
              <div className="footer">
                <div className="stats" style={{ width: "100%" }}>
                  {this.props.subCategories !== undefined ? (
                    this.props.subCategories.length > 0 ? (
                      this.props.subCategories.map((sub, index) => {
                        return (
                          <>
                            <Table hover>
                              <tbody>
                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <Link to={`/page/item/${sub.id}`}>
                                      <p style={{ color: "#919191" }}>
                                        {sub.name}
                                      </p>
                                    </Link>
                                  </td>

                                  <td style={{ textAlign: "right" }}>
                                    <span
                                      onClick={() => this.delete(sub.id)}
                                      style={{
                                        marginRight: "10px",
                                        color: "red"
                                      }}
                                    >
                                      Hapus
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </>
                        );
                      })
                    ) : (
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center"
                        }}
                      >
                        <p>Data Belum Ada</p>
                      </div>
                    )
                  ) : (
                    <p>Data Belum Ada</p>
                  )}

                  <Button
                    bsStyle="danger"
                    style={{ margin: "10px" }}
                    bsSize="small"
                    onClick={() => this.props.deleteCategory(this.props.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect()(Category);
