import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={7}>
              <div className="numbers">
                <p>{this.props.name}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "10px" }}>
              <div className="footer">
                <hr />
                <div className="stats">
                  {this.props.subCategories !== undefined ? (
                    this.props.subCategories.length > 0 ? (
                      this.props.subCategories.map((sub, index) => {
                        return (
                          <Link to={`/page/item/${sub.id}`}>
                            <p style={{ color: "#919191" }}>{sub.name}</p>
                          </Link>
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
                        <Button bsStyle="success" onClick={this.props.open}>
                          {" "}
                          Add Item
                        </Button>
                      </div>
                    )
                  ) : (
                    <Button bsStyle="success" onClick={this.props.open}>
                      Add Item
                    </Button>
                  )}
                  {/* {this.props.subCategories.length > 0 ? (
                    this.props.subCategories.map((sub, index) => {
                      return (
                        <Link to={`/page/item/${sub.id}`}>
                          <p style={{ color: "#919191" }}>{sub.name}</p>
                        </Link>
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
                      <Button bsStyle="success" onClick={this.props.open}>
                        {" "}
                        Add Item
                      </Button>
                    </div>
                  )} */}
                  {/* // {this.props.subCategories.map((sub, index) => {
              //   return (
              //     <Link to={`/page/item/${sub.id}`}>
              //       <p style={{ color: "#919191" }}>{sub.name}</p>
              //     </Link>
              //   );
              // })} */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Category;
