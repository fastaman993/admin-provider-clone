import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = props => {
  return (
    <div className="card card-stats" style={{ margin: "20px" }}>
      <div className="content">
        <Row>
          <Col xs={12}>
            <div className="numbers">
              <p style={{ textAlign: "center" }}>{props.name}</p>
            </div>
          </Col>
        </Row>
        <div className="footer">
          <hr />

          <div className="stats" style={{ width: "100%" }}>
            <p>Description : {props.detail}</p>

            <Col md={6} style={{ marginTop: "10px" }}>
              <p style={{ textAlign: "left" }}>
                Bandwidth: {props.bandwidth}MB
              </p>
              {props.discount !== 0 ? (
                <>
                  <hr />
                  <p style={{ textAlign: "left" }}>
                    Discount: {props.discount}%
                  </p>
                </>
              ) : null}
            </Col>
            <Col md={6} style={{ marginTop: "10px" }}>
              <p style={{ textAlign: "right" }}>
                Duration: {props.duration} Days
              </p>
              <hr />
              {props.discount !== 0 ? (
                <>
                  <p
                    style={{
                      textAlign: "right",
                      textDecoration: "line-through"
                    }}
                  >
                    Price : Rp{props.price}
                  </p>
                  <p style={{ textAlign: "right" }}>
                    Price : Rp{props.discprice}
                  </p>
                </>
              ) : (
                <p style={{ textAlign: "right" }}>Price : Rp{props.price}</p>
              )}
            </Col>
          </div>

          {/* {this.props.subCategories.map((sub, index) => {
                  return (
                    <Link>
                      <p style={{ color: "#919191" }}>{sub.name}</p>
                    </Link>
                  );
                })} */}
        </div>
      </div>
    </div>
  );
};

export default Item;
